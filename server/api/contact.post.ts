import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(10),
  turnstileToken: z.string().min(1),
  company: z.string().max(0).optional(),
})

const verifyTurnstile = async (token: string, secretKey: string, remoteIp?: string) => {
  const response = await $fetch<{ success: boolean }>(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      body: {
        secret: secretKey,
        response: token,
        remoteip: remoteIp,
      },
    },
  )

  return response.success
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const result = contactSchema.safeParse(body)

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid form payload',
    })
  }

  // Honeypot: bots fill hidden fields, real visitors never see or fill it.
  if (result.data.company) {
    return { ok: true }
  }

  const config = useRuntimeConfig(event)

  if (!config.turnstileSecretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Turnstile is not configured',
    })
  }

  const clientIp = getRequestIP(event, { xForwardedFor: true })
  const isHuman = await verifyTurnstile(
    result.data.turnstileToken,
    config.turnstileSecretKey,
    clientIp,
  )

  if (!isHuman) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed captcha verification',
    })
  }

  if (!config.smtpHost || !config.smtpUser || !config.smtpPass) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email sending is not configured',
    })
  }

  const { name, email, phone, subject, message } = result.data

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort) || 587,
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  await transporter.sendMail({
    from: `"PhysioBaur - site web" <${config.smtpUser}>`,
    to: config.contactToEmail,
    replyTo: email,
    subject: `[Contact site] ${subject}`,
    text: [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${phone || '-'}`,
      `Sujet : ${subject}`,
      '',
      message,
    ].join('\n'),
  })

  return { ok: true }
})

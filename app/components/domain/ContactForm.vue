<script setup lang="ts">
type ContactPayload = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void
    onTurnstileExpired?: () => void
    turnstile?: {
      reset: (widgetId?: string) => void
    }
  }
}

const config = useRuntimeConfig()
const turnstileToken = ref('')
const company = ref('')

useHead({
  script: [
    {
      src: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
      async: true,
      defer: true,
    },
  ],
})

onMounted(() => {
  window.onTurnstileSuccess = (token: string) => {
    turnstileToken.value = token
  }
  window.onTurnstileExpired = () => {
    turnstileToken.value = ''
  }
})

onBeforeUnmount(() => {
  window.onTurnstileSuccess = undefined
  window.onTurnstileExpired = undefined
})

const form = reactive<ContactPayload>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const validateField = (field: keyof typeof form) => {
  switch (field) {
    case 'name':
      errors.name =
        form.name.length < 2 ? 'Le nom doit faire au moins 2 caractères' : ''
      break
    case 'email':
      errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ? 'Email invalide'
        : ''
      break
    case 'subject':
      errors.subject =
        form.subject.length < 2
          ? 'Le sujet doit faire au moins 2 caractères'
          : ''
      break
    case 'message':
      errors.message =
        form.message.length < 10
          ? 'Le message doit faire au moins 10 caractères'
          : ''
      break
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('subject')
  validateField('message')

  return !Object.values(errors).some((e) => e)
}

const status = ref<'idle' | 'pending' | 'success' | 'error'>('idle')
const feedback = ref('')

const submitForm = async () => {
  if (!validateForm()) return

  if (!turnstileToken.value) {
    status.value = 'error'
    feedback.value = 'Merci de valider le contrôle de sécurité avant d\'envoyer.'
    return
  }

  status.value = 'pending'
  feedback.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...form,
        turnstileToken: turnstileToken.value,
        company: company.value,
      },
    })

    status.value = 'success'
    feedback.value =
      'Votre demande a bien été envoyée. Nous vous recontactons rapidement.'
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    Object.assign(errors, {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    turnstileToken.value = ''
    window.turnstile?.reset()
  } catch {
    status.value = 'error'
    feedback.value = "Une erreur est survenue. Merci d'essayer à nouveau."
  }
}
</script>

<template>
  <form class="space-y-4 sm:space-y-4.5" @submit.prevent="submitForm">
    <div class="grid gap-4 sm:grid-cols-2">
      <label class="space-y-1.5 text-sm font-medium text-[var(--color-text)]">
        <span>Nom *</span>
        <input
          v-model="form.name"
          @blur="validateField('name')"
          required
          type="text"
          autocomplete="name"
          aria-label="Votre nom complet"
          :class="errors.name ? 'ring-rose-500' : ''"
          class="w-full rounded-[1.05rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-2xl"
        />
        <p
          v-if="errors.name"
          class="text-xs text-rose-600 dark:text-rose-400 mt-1"
        >
          {{ errors.name }}
        </p>
      </label>
      <label class="space-y-1.5 text-sm font-medium text-[var(--color-text)]">
        <span>E-mail *</span>
        <input
          v-model="form.email"
          @blur="validateField('email')"
          required
          type="email"
          autocomplete="email"
          aria-label="Votre adresse email"
          :class="errors.email ? 'ring-rose-500' : ''"
          class="w-full rounded-[1.05rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-2xl"
        />
        <p
          v-if="errors.email"
          class="text-xs text-rose-600 dark:text-rose-400 mt-1"
        >
          {{ errors.email }}
        </p>
      </label>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <label class="space-y-1.5 text-sm font-medium text-[var(--color-text)]">
        <span>Téléphone</span>
        <input
          v-model="form.phone"
          type="tel"
          autocomplete="tel"
          aria-label="Votre numéro de téléphone"
          class="w-full rounded-[1.05rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-2xl"
        />
      </label>
      <label class="space-y-1.5 text-sm font-medium text-[var(--color-text)]">
        <span>Sujet *</span>
        <input
          v-model="form.subject"
          @blur="validateField('subject')"
          required
          type="text"
          autocomplete="subject"
          aria-label="Sujet de votre message"
          :class="errors.subject ? 'ring-rose-500' : ''"
          class="w-full rounded-[1.05rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-2xl"
        />
        <p
          v-if="errors.subject"
          class="text-xs text-rose-600 dark:text-rose-400 mt-1"
        >
          {{ errors.subject }}
        </p>
      </label>
    </div>
    <label
      class="block space-y-1.5 text-sm font-medium text-[var(--color-text)]"
    >
      <span>Message *</span>
      <textarea
        v-model="form.message"
        @blur="validateField('message')"
        required
        rows="5"
        aria-label="Votre message détaillé"
        :class="errors.message ? 'ring-rose-500' : ''"
        class="w-full rounded-[1.2rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-3xl"
      />
      <p
        v-if="errors.message"
        class="text-xs text-rose-600 dark:text-rose-400 mt-1"
      >
        {{ errors.message }}
      </p>
    </label>

    <input
      v-model="company"
      type="text"
      name="company"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
      class="absolute left-[-9999px] h-0 w-0 opacity-0"
    />

    <ClientOnly>
      <div
        class="cf-turnstile"
        :data-sitekey="config.public.turnstileSiteKey"
        data-callback="onTurnstileSuccess"
        data-expired-callback="onTurnstileExpired"
      />
    </ClientOnly>

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
      <AppButton
        :label="status === 'pending' ? 'Envoi...' : 'Envoyer la demande'"
      />
      <p
        v-if="feedback"
        class="text-sm"
        :class="
          status === 'success'
            ? 'text-sky-600 dark:text-sky-400'
            : 'text-rose-600 dark:text-rose-400'
        "
      >
        {{ feedback }}
      </p>
    </div>
  </form>
</template>

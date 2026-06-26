<script setup lang="ts">
type ContactPayload = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const form = reactive<ContactPayload>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const status = ref<'idle' | 'pending' | 'success' | 'error'>('idle')
const feedback = ref('')

const submitForm = async () => {
  status.value = 'pending'
  feedback.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form,
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
  } catch {
    status.value = 'error'
    feedback.value = "Une erreur est survenue. Merci d'essayer à nouveau."
  }
}
</script>

<template>
  <form class="space-y-4 sm:space-y-4.5" @submit.prevent="submitForm">
    <div class="grid gap-4 sm:grid-cols-2">
      <label class="space-y-2 text-sm font-medium text-[var(--color-text)]">
        <span>Nom</span>
        <input
          v-model="form.name"
          required
          type="text"
          autocomplete="name"
          class="w-full rounded-[1.05rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-2xl"
        />
      </label>
      <label class="space-y-2 text-sm font-medium text-[var(--color-text)]">
        <span>E-mail</span>
        <input
          v-model="form.email"
          required
          type="email"
          autocomplete="email"
          class="w-full rounded-[1.05rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-2xl"
        />
      </label>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <label class="space-y-2 text-sm font-medium text-[var(--color-text)]">
        <span>Téléphone</span>
        <input
          v-model="form.phone"
          type="tel"
          autocomplete="tel"
          class="w-full rounded-[1.05rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-2xl"
        />
      </label>
      <label class="space-y-2 text-sm font-medium text-[var(--color-text)]">
        <span>Sujet</span>
        <input
          v-model="form.subject"
          required
          type="text"
          class="w-full rounded-[1.05rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-2xl"
        />
      </label>
    </div>
    <label class="block space-y-2 text-sm font-medium text-[var(--color-text)]">
      <span>Message</span>
      <textarea
        v-model="form.message"
        required
        rows="5"
        class="w-full rounded-[1.2rem] bg-[color:color-mix(in_oklab,var(--color-surface)_96%,transparent)] px-4 py-3 text-base outline-none ring-1 ring-black/4 transition focus:ring-2 focus:ring-[var(--color-accent)] dark:ring-white/8 sm:rounded-3xl"
      />
    </label>
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

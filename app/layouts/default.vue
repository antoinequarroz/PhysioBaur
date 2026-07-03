<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
    <NuxtLoadingIndicator color="var(--color-accent)" />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <ClientOnly>
      <MobileBookingBar />
    </ClientOnly>
  </div>
</template>

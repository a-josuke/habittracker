<template>
  <div class="rmterp">
    <div class="fzypcq">
      <slot />
    </div>
    <div class="iPbnzK"></div>
  </div>
</template>

<style lang="postcss" scoped>
.rmterp {
  @apply relative flex h-dvh items-center justify-center;
}

.fzypcq {
  @apply z-10 mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-4 p-5;
}

.iPbnzK {
  @apply absolute h-dvh w-screen blur transition-opacity duration-300;
  background:
    radial-gradient(circle at 15% 60%, rgba(37, 99, 235, 0.55), transparent 45%),
    radial-gradient(circle at 85% 20%, rgba(29, 78, 216, 0.45), transparent 50%),
    radial-gradient(circle at 80% 85%, rgba(37, 99, 235, 0.4), transparent 45%),
    #060910;
}
</style>

<script setup lang="ts">
const { user } = useUserSession();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(user.value.login);
  }
});
</script>

<template>
  <Card class="items-start justify-center gap-7 p-6">
    <div class="relative z-10 flex w-5/6 flex-col gap-5">
      <div class="h-12 w-12 rounded-2xl border-4 border-blue-600 bg-blue-400 shadow-lg"></div>
      <div class="text-lg font-medium">A Year from Now</div>
      <div class="text-3xl font-medium">
        An efficient tool to
        <span class="text-blue-400">track</span>
        and manage your
        <span class="text-blue-400">daily habits</span>
      </div>
    </div>
    <a href="/api/auth/github" class="button bg-white/20 px-2.5 py-2 hover:bg-white/30">
      <UIcon name="i-simple-icons-github" class="h-5 w-5" />
      Continue with GitHub
    </a>
  </Card>
</template>

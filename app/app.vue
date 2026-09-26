<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', href: '/icon.png' },
    { rel: 'apple-touch-icon', href: '/icon.png' },
    { rel: 'msapplication-TileImage', href: '/icon.png' },
    { rel: 'manifest', href: '/manifest.webmanifest' },
  ],
  meta: [{ name: 'theme-color', content: '#2563EB' }],
});

useSeoMeta({
  title: 'A Year from Now',
  description: 'A minimalistic habit tracker application to track and manage your daily habits with ease',
  ogTitle: 'A Year from Now',
  ogDescription: 'A minimalistic habit tracker application to track and manage your daily habits with ease',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  twitterCard: 'summary_large_image',
  ogImage: '/social-card.png',
  twitterImage: '/social-card.png',
  ogType: 'website',
  ogSiteName: 'A Year from Now',
  robots: 'index, follow',
  keywords: 'habit, tracker, daily, habits, management, tool, minimalistic',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

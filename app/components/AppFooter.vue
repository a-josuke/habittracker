<script setup lang="ts">
import { format } from 'date-fns';
const config = useRuntimeConfig();
const currentYear = format(new Date(), 'yyyy');
</script>

<template>
  <div class="mt-2 flex items-center justify-center gap-1 text-xs text-neutral-400">
    <a class="font-semibold transition hover:text-white" href="https://github.com/a-josuke/habittracker" target="_blank"
      >A Year from Now v{{ config.public.version }}</a
    >
    - by
    <a class="font-semibold transition hover:text-white" href="https://github.com/a-josuke" target="_blank">a-josuke</a>
    {{ currentYear }}
  </div>
</template>

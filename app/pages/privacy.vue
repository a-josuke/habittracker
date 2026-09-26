<script setup lang="ts">
definePageMeta({ layout: false });

useSeoMeta({
  title: 'Privacy Policy · A Year from Now',
  robots: 'index, follow',
});
</script>

<template>
  <div class="min-h-dvh bg-[#060910] px-5 py-12 text-white/80">
    <div class="mx-auto flex max-w-2xl flex-col gap-6">
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-semibold text-white">Privacy Policy</h1>
        <p class="text-sm text-white/40">Effective date: September 2026</p>
      </div>

      <p>
        A Year from Now ("the app") is a personal habit-tracking application. This page explains what information the
        app collects, how it is used, and the choices you have.
      </p>

      <section class="flex flex-col gap-2">
        <h2 class="text-lg font-medium text-white">Information we collect</h2>
        <p>When you sign in with GitHub, we receive and store your public GitHub profile information:</p>
        <ul class="list-disc pl-5">
          <li>Your GitHub username, display name, bio, and avatar image</li>
        </ul>
        <p>
          We do not request access to your email address, private repositories, or any other private GitHub data.
          When you use the app, we also store the content you create:
        </p>
        <ul class="list-disc pl-5">
          <li>Habit titles, descriptions, and your daily completion history</li>
        </ul>
      </section>

      <section class="flex flex-col gap-2">
        <h2 class="text-lg font-medium text-white">How this information is used</h2>
        <p>
          Your profile and habit data are used solely to operate the app: displaying your profile, tracking your
          habits, and showing your progress over time. We do not sell your data, share it with advertisers, or use it
          for any purpose beyond running the app.
        </p>
      </section>

      <section class="flex flex-col gap-2">
        <h2 class="text-lg font-medium text-white">Where your data is stored</h2>
        <p>
          Data is stored in a Cloudflare D1 database. Your sign-in session is kept in an encrypted, HTTP-only cookie.
          Authentication is handled by GitHub's OAuth service; we never see or store your GitHub password.
        </p>
      </section>

      <section id="delete-account" class="flex flex-col gap-2">
        <h2 class="text-lg font-medium text-white">How to delete your A Year from Now account and data</h2>
        <p>You can request deletion of your account and all associated data directly within the app:</p>
        <ol class="list-decimal pl-5">
          <li>Sign in to A Year from Now with GitHub.</li>
          <li>On your profile page, click the settings (gear) icon next to the "Create" button.</li>
          <li>Select your name to open profile settings, then scroll to the "Delete Account" section.</li>
          <li>Type "delete" to confirm, then click "Delete my account".</li>
        </ol>
        <p>
          This immediately and permanently removes your profile information (name, bio, avatar reference, and GitHub
          account association) and all of your habits and completion history from our database. Nothing is retained
          afterward — there is no additional retention period, and the deletion cannot be undone.
        </p>
      </section>

      <section id="delete-data" class="flex flex-col gap-2">
        <h2 class="text-lg font-medium text-white">How to delete individual data without deleting your account</h2>
        <p>You can delete a single habit, along with its full completion history, without deleting your account:</p>
        <ol class="list-decimal pl-5">
          <li>Sign in to A Year from Now with GitHub.</li>
          <li>Open the menu on the habit you want to remove and select "Delete".</li>
          <li>Type "DELETE" to confirm, then click "I understand, delete this habit".</li>
        </ol>
        <p>
          This immediately and permanently removes that habit's title, description, and completion history. Your
          account, profile information, and any other habits are kept. Nothing is retained after deletion — there is
          no additional retention period.
        </p>
      </section>

      <section class="flex flex-col gap-2">
        <h2 class="text-lg font-medium text-white">Contact</h2>
        <p>
          Questions about this policy can be directed to
          <a class="underline transition hover:text-white" href="mailto:dahal.ankit7@gmail.com">dahal.ankit7@gmail.com</a>
          or
          <a class="underline transition hover:text-white" href="https://github.com/a-josuke" target="_blank">github.com/a-josuke</a>.
        </p>
      </section>

      <NuxtLink to="/" class="mt-4 text-sm text-white/50 underline transition hover:text-white">Back to A Year from Now</NuxtLink>
    </div>
  </div>
</template>

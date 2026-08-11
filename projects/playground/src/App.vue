<script setup lang="ts"></script>

<template>
  <div class="playground">
    <nav class="playground__nav">
      <router-link to="/atoms">Atoms</router-link>
      <router-link to="/molecules">Molecules</router-link>
      <router-link to="/organisms">Organisms</router-link>
    </nav>
    <main class="playground__content">
      <router-view />
    </main>
  </div>
</template>

<style>
.playground { font-family: system-ui, sans-serif; }
.playground__nav {
  display: flex;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
}
.playground__nav a { text-decoration: none; color: #2f6f4f; font-weight: 600; }
.playground__content { padding: 24px; }
</style>

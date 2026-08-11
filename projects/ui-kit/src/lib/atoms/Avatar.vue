<script setup lang="ts">
withDefaults(
  defineProps<{ name?: string; src?: string; size?: 'sm' | 'md' | 'lg' }>(),
  { size: 'md' }
);

function initials(name?: string) {
  if (!name) return '?';
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
</script>

<template>
  <span class="cu-avatar" :class="`cu-avatar--${size}`">
    <img v-if="src" :src="src" :alt="name" />
    <span v-else>{{ initials(name) }}</span>
  </span>
</template>

<style scoped lang="scss">
.cu-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  font-weight: 700;
  overflow: hidden;

  img { width: 100%; height: 100%; object-fit: cover; }

  &--sm { width: 28px; height: 28px; font-size: var(--font-size-xs); }
  &--md { width: 40px; height: 40px; font-size: var(--font-size-sm); }
  &--lg { width: 56px; height: 56px; font-size: var(--font-size-md); }
}
</style>

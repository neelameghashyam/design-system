<script setup lang="ts">
withDefaults(defineProps<{ padded?: boolean }>(), { padded: true });
</script>

<template>
  <div class="cu-card" :class="{ 'cu-card--padded': padded }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.cu-card {
  background: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);

  &--padded { padding: var(--space-5); }
}
</style>

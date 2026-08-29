<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'md' | 'lg'; color?: string }>(), {
  size: 'md',
});
</script>

<template>
  <span
    class="cu-spinner"
    :class="`cu-spinner--${size}`"
    :style="color ? { borderTopColor: color, borderRightColor: color } : {}"
    role="status"
    aria-label="Loading"
  />
</template>

<style scoped lang="scss">
.cu-spinner {
  display: inline-block;
  border: 2px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-right-color: var(--color-primary);
  border-radius: 50%;
  animation: cu-spin 0.7s linear infinite;

  &--sm { width: 14px; height: 14px; }
  &--md { width: 24px; height: 24px; }
  &--lg { width: 36px; height: 36px; }
}

@keyframes cu-spin {
  to { transform: rotate(360deg); }
}
</style>
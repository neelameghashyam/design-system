<script setup lang="ts">
withDefaults(
  defineProps<{ variant?: 'neutral' | 'success' | 'warning' | 'danger' }>(),
  { variant: 'neutral' }
);
</script>

<template>
  <span class="cu-badge" :class="`cu-badge--${variant}`"><slot /></span>
</template>

<style scoped lang="scss">
.cu-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px var(--space-2);
  border-radius: var(--radius-pill);
  font-size: var(--font-size-xs);
  font-weight: 600;

  &--neutral { background: var(--color-surface); color: var(--color-text-muted); }
  &--success { background: #e5f6ec; color: var(--color-success); }
  &--warning { background: #fbf1de; color: var(--color-warning); }
  &--danger { background: #fbe9e7; color: var(--color-danger); }
}
</style>

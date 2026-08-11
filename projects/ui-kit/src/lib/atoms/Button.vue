<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
  }>(),
  { variant: 'primary', size: 'md', disabled: false, loading: false }
);

defineEmits<{ (e: 'click', evt: MouseEvent): void }>();
</script>

<template>
  <button
    class="cu-button"
    :class="[`cu-button--${variant}`, `cu-button--${size}`, { 'cu-button--loading': loading }]"
    :disabled="disabled || loading"
    @click="(e) => $emit('click', e)"
  >
    <span v-if="loading" class="cu-button__spinner" aria-hidden="true" />
    <slot />
  </button>
</template>

<style scoped lang="scss">
.cu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-family-base);
  font-weight: 600;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--sm { padding: var(--space-1) var(--space-3); font-size: var(--font-size-xs); }
  &--md { padding: var(--space-2) var(--space-4); font-size: var(--font-size-sm); }
  &--lg { padding: var(--space-3) var(--space-5); font-size: var(--font-size-md); }

  &--primary {
    background: var(--color-primary);
    color: #fff;
    &:hover:not(:disabled) { background: var(--color-primary-dark); }
  }

  &--secondary {
    background: var(--color-secondary);
    color: #fff;
    &:hover:not(:disabled) { filter: brightness(0.9); }
  }

  &--outline {
    background: transparent;
    border-color: var(--color-primary);
    color: var(--color-primary);
    &:hover:not(:disabled) { background: var(--color-primary-light); }
  }

  &--ghost {
    background: transparent;
    color: var(--color-primary);
    &:hover:not(:disabled) { background: var(--color-surface); }
  }

  &--danger {
    background: var(--color-danger);
    color: #fff;
    &:hover:not(:disabled) { filter: brightness(0.9); }
  }
}

.cu-button__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: cu-spin 0.6s linear infinite;
}

@keyframes cu-spin {
  to { transform: rotate(360deg); }
}
</style>

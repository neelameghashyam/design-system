<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    error?: string;
  }>(),
  { modelValue: '', type: 'text', disabled: false }
);

defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<template>
  <div class="cu-input-wrap">
    <input
      class="cu-input"
      :class="{ 'cu-input--error': !!error }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="error" class="cu-input__error">{{ error }}</span>
  </div>
</template>

<style scoped lang="scss">
.cu-input-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.cu-input {
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  outline: none;
  transition: border-color 0.15s ease;

  &:focus { border-color: var(--color-primary); }
  &:disabled { background: var(--color-surface); cursor: not-allowed; }
  &--error { border-color: var(--color-danger); }
}

.cu-input__error {
  font-size: var(--font-size-xs);
  color: var(--color-danger);
}
</style>

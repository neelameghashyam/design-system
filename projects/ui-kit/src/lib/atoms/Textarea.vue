<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
    error?: string;
  }>(),
  { modelValue: '', rows: 4, disabled: false }
);

defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<template>
  <div class="cu-textarea-wrap">
    <textarea
      class="cu-textarea"
      :class="{ 'cu-textarea--error': !!error }"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <span v-if="error" class="cu-textarea__error">{{ error }}</span>
  </div>
</template>

<style scoped lang="scss">
.cu-textarea-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.cu-textarea {
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  outline: none;
  resize: vertical;
  transition: border-color 0.15s ease;

  &:focus { border-color: var(--color-primary); }
  &:disabled { background: var(--color-surface); cursor: not-allowed; }
  &--error { border-color: var(--color-danger); }
}

.cu-textarea__error {
  font-size: var(--font-size-xs);
  color: var(--color-danger);
}
</style>
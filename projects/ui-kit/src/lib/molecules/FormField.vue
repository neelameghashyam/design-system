<script setup lang="ts">
import Input from '../atoms/Input.vue';

withDefaults(
  defineProps<{
    modelValue?: string;
    label: string;
    required?: boolean;
    hint?: string;
    error?: string;
    type?: string;
  }>(),
  { modelValue: '', required: false, type: 'text' }
);

defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<template>
  <div class="cu-form-field">
    <label class="cu-form-field__label">
      {{ label }}
      <span v-if="required" class="cu-form-field__required">*</span>
    </label>
    <Input
      :type="type"
      :model-value="modelValue"
      :error="error"
      @update:model-value="(v) => $emit('update:modelValue', v)"
    />
    <span v-if="hint && !error" class="cu-form-field__hint">{{ hint }}</span>
  </div>
</template>

<style scoped lang="scss">
.cu-form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  max-width: 360px;
}

.cu-form-field__label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text);
}

.cu-form-field__required { color: var(--color-danger); }

.cu-form-field__hint {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}
</style>

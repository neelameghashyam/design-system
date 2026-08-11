<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: boolean;
    label?: string;
    disabled?: boolean;
    error?: string;
  }>(),
  { modelValue: false, disabled: false }
);

defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();
</script>

<template>
  <div class="cu-checkbox-wrap">
    <label class="cu-checkbox" :class="{ 'cu-checkbox--disabled': disabled }">
      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      />
      <span class="cu-checkbox__box" :class="{ 'cu-checkbox__box--error': !!error }"></span>
      <span v-if="label" class="cu-checkbox__label">{{ label }}</span>
    </label>
    <span v-if="error" class="cu-checkbox__error">{{ error }}</span>
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;

.cu-checkbox-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.cu-checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--color-text);

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.cu-checkbox__box {
  width: 18px;
  height: 18px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.15s ease, border-color 0.15s ease;

  &--error {
    border-color: var(--color-danger);
  }
}

.cu-checkbox input:checked + .cu-checkbox__box {
  background: var(--color-primary);
  border-color: var(--color-primary);

  &::after {
    content: '';
    width: 5px;
    height: 9px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-1px, -1px);
  }
}

.cu-checkbox input:focus-visible + .cu-checkbox__box {
  @include focus-ring;
}

.cu-checkbox__error {
  font-size: var(--font-size-xs);
  color: var(--color-danger);
}
</style>
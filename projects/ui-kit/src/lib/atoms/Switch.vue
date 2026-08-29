<script setup lang="ts">
withDefaults(
  defineProps<{ modelValue?: boolean; disabled?: boolean; label?: string }>(),
  { modelValue: false, disabled: false }
);

defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();
</script>

<template>
  <label class="cu-switch" :class="{ 'cu-switch--disabled': disabled }">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="cu-switch__track">
      <span class="cu-switch__thumb" />
    </span>
    <span v-if="label" class="cu-switch__label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
.cu-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  font-size: var(--font-size-sm);

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  &--disabled { cursor: not-allowed; opacity: 0.5; }
}

.cu-switch__track {
  width: 36px;
  height: 20px;
  border-radius: var(--radius-pill);
  background: var(--color-border);
  position: relative;
  transition: background-color 0.15s ease;
  flex-shrink: 0;
}

.cu-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: var(--shadow-sm);
  transition: transform 0.15s ease;
}

.cu-switch input:checked + .cu-switch__track {
  background: var(--color-primary);
}

.cu-switch input:checked + .cu-switch__track .cu-switch__thumb {
  transform: translateX(16px);
}
</style>
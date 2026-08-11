<script setup lang="ts">
withDefaults(defineProps<{ modelValue?: string; placeholder?: string }>(), {
  modelValue: '',
  placeholder: 'Search…',
});
defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<template>
  <div class="cu-search">
    <span class="cu-search__icon" aria-hidden="true">⌕</span>
    <input
      class="cu-search__input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss">
.cu-search {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  max-width: 320px;
}

.cu-search__icon { color: var(--color-text-muted); }

.cu-search__input {
  border: none;
  outline: none;
  flex: 1;
  font-size: var(--font-size-sm);
  font-family: var(--font-family-base);
}
</style>

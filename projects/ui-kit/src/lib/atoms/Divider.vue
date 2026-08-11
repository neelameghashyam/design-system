<script setup lang="ts">
withDefaults(defineProps<{ orientation?: 'horizontal' | 'vertical' }>(), {
  orientation: 'horizontal',
});
</script>

<template>
  <hr class="cu-divider" :class="`cu-divider--${orientation}`" />
</template>

<style scoped lang="scss">
.cu-divider {
  border: none;
  background: var(--color-border);

  &--horizontal { width: 100%; height: 1px; margin: var(--space-4) 0; }
  &--vertical { width: 1px; height: 100%; margin: 0 var(--space-4); }
}
</style>
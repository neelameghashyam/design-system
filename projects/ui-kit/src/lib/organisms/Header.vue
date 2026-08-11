<script setup lang="ts">
import Avatar from '../atoms/Avatar.vue';

withDefaults(defineProps<{ productName?: string; userName?: string }>(), {
  productName: 'Core UI',
});
</script>

<template>
  <header class="cu-header">
    <div class="cu-header__brand">
      <strong>{{ productName }}</strong>
    </div>
    <nav class="cu-header__nav">
      <slot name="nav" />
    </nav>
    <div class="cu-header__actions">
      <Avatar :name="userName" size="sm" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.cu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-5);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-light);
}

.cu-header__brand { font-size: var(--font-size-lg); color: var(--color-primary-dark); }
.cu-header__nav { display: flex; gap: var(--space-4); }
</style>

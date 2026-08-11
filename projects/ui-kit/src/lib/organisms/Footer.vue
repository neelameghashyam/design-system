<script setup lang="ts">
withDefaults(defineProps<{ companyName?: string; year?: number }>(), {
  companyName: 'Your Company',
  year: new Date().getFullYear(),
});
</script>

<template>
  <footer class="cu-footer">
    <span>© {{ year }} {{ companyName }}. All rights reserved.</span>
    <div class="cu-footer__links">
      <slot name="links" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.cu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  border-top: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.cu-footer__links { display: flex; gap: var(--space-3); }
</style>

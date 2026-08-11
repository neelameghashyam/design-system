<script setup lang="ts">
withDefaults(defineProps<{ open: boolean; title?: string }>(), { open: false });
defineEmits<{ (e: 'close'): void }>();
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="cu-modal-overlay" @click.self="$emit('close')">
      <div class="cu-modal" role="dialog" aria-modal="true">
        <header class="cu-modal__header">
          <h3 v-if="title">{{ title }}</h3>
          <button class="cu-modal__close" aria-label="Close" @click="$emit('close')">×</button>
        </header>
        <div class="cu-modal__body">
          <slot />
        </div>
        <footer v-if="$slots.footer" class="cu-modal__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.cu-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cu-modal {
  background: var(--color-bg-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
}

.cu-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--color-border);

  h3 { margin: 0; font-size: var(--font-size-lg); }
}

.cu-modal__close {
  background: none;
  border: none;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  color: var(--color-text-muted);
}

.cu-modal__body { padding: var(--space-5); overflow-y: auto; }

.cu-modal__footer {
  padding: var(--space-4) var(--space-5);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-2);
}
</style>

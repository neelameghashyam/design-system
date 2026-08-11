<script setup lang="ts">
import { ref } from 'vue';
import { FormField, Modal, SearchInput, Button } from '@neelameghashyam/ui-kit';

const email = ref('');
const open = ref(false);
</script>

<template>
  <section>
    <h2>Molecules</h2>

    <h3>FormField</h3>
    <FormField v-model="email" label="Email address" required hint="We'll never share it." />

    <h3 style="margin-top:24px;">SearchInput</h3>
    <SearchInput />

    <h3 style="margin-top:24px;">Modal</h3>
    <Button @click="open = true">Open modal</Button>
    <Modal :open="open" title="Example modal" @close="open = false">
      <p>Modal body content goes here.</p>
      <template #footer>
        <Button variant="ghost" @click="open = false">Cancel</Button>
        <Button variant="primary" @click="open = false">Confirm</Button>
      </template>
    </Modal>
  </section>
</template>

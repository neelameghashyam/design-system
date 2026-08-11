<script setup lang="ts">
import { Header, Footer } from '@neelameghashyam/ui-kit';
</script>

<template>
  <section>
    <h2>Organisms</h2>

    <h3>Header</h3>
    <Header product-name="Core UI" user-name="Ada Lovelace">
      <template #nav>
        <a href="#">Overview</a>
        <a href="#">Components</a>
      </template>
    </Header>

    <h3 style="margin-top:24px;">Footer</h3>
    <Footer company-name="Your Company">
      <template #links>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </template>
    </Footer>
  </section>
</template>

<script setup lang="ts">
import { Button, Input, Card, Badge, Avatar } from '@YOUR_GITHUB_ORG/ui-kit';
</script>

<template>
  <section>
    <h2>Atoms</h2>

    <h3>Button</h3>
    <div style="display:flex; gap:12px; margin-bottom:24px;">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>

    <h3>Input</h3>
    <div style="max-width:320px; margin-bottom:24px;">
      <Input placeholder="Type something…" />
    </div>

    <h3>Card</h3>
    <Card style="max-width:320px; margin-bottom:24px;">
      <p>This is a card.</p>
    </Card>

    <h3>Badge</h3>
    <div style="display:flex; gap:8px; margin-bottom:24px;">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>

    <h3>Avatar</h3>
    <div style="display:flex; gap:8px; align-items:center;">
      <Avatar name="Ada Lovelace" size="sm" />
      <Avatar name="Grace Hopper" size="md" />
      <Avatar name="Alan Turing" size="lg" />
    </div>
  </section>
</template>

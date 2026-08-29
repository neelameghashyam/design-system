<script setup lang="ts">
withDefaults(
  defineProps<{
    columns: { key: string; label: string }[];
    rows: Record<string, string | number>[];
    emptyText?: string;
  }>(),
  { emptyText: 'No data to display' }
);
</script>

<template>
  <div class="cu-table-wrap">
    <table class="cu-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="rows.length === 0">
          <td :colspan="columns.length" class="cu-table__empty">{{ emptyText }}</td>
        </tr>
        <tr v-for="(row, i) in rows" :key="i">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.cu-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.cu-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);

  th, td {
    text-align: left;
    padding: var(--space-3) var(--space-4);
    border-bottom: 1px solid var(--color-border);
  }

  th {
    background: var(--color-surface);
    font-weight: 600;
    color: var(--color-text-muted);
  }

  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: var(--color-surface); }
}

.cu-table__empty {
  text-align: center;
  color: var(--color-text-muted);
  padding: var(--space-6);
}
</style>
import type { Meta, StoryObj } from '@storybook/vue3';
import DataTable from './DataTable.vue';

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
];

export const Default: Story = {
  args: {
    columns,
    rows: [
      { name: 'Ada Lovelace', role: 'Engineer', status: 'Active' },
      { name: 'Grace Hopper', role: 'Admiral', status: 'Active' },
      { name: 'Alan Turing', role: 'Researcher', status: 'Inactive' },
    ],
  },
  render: (args) => ({
    components: { DataTable },
    setup: () => ({ args }),
    template: '<DataTable v-bind="args" />',
  }),
};

export const Empty: Story = {
  args: { columns, rows: [] },
  render: (args) => ({
    components: { DataTable },
    setup: () => ({ args }),
    template: '<DataTable v-bind="args" />',
  }),
};
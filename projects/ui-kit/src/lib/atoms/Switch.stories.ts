import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Switch from './Switch.vue';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: { label: 'Enable notifications' },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const on = ref(false);
      return { args, on };
    },
    template: '<Switch v-bind="args" v-model="on" />',
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { Switch },
    setup: () => ({ args }),
    template: '<Switch v-bind="args" />',
  }),
};
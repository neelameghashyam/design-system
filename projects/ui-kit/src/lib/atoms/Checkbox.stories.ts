import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { label: 'Accept terms and conditions' },
};

export default meta;
type Story = StoryObj<typeof Checkbox>
export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: '<Checkbox v-bind="args" v-model="checked" />',
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: '<Checkbox v-bind="args" />',
  }),
};

export const WithError: Story = {
  args: { error: 'You must accept to continue' },
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: '<Checkbox v-bind="args" />',
  }),
};
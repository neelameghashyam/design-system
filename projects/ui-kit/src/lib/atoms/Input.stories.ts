import type { Meta, StoryObj } from '@storybook/vue3';
import Input from './Input.vue';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: { placeholder: 'Enter text…' },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" />',
  }),
};

export const WithError: Story = {
  args: { error: 'This field is required' },
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" />',
  }),
};

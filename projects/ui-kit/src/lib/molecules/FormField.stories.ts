import type { Meta, StoryObj } from '@storybook/vue3';
import FormField from './FormField.vue';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: { label: 'Email address', required: true, hint: "We'll never share your email." },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: (args) => ({
    components: { FormField },
    setup: () => ({ args }),
    template: '<FormField v-bind="args" />',
  }),
};

export const WithError: Story = {
  args: { hint: undefined, error: 'Enter a valid email address' },
  render: (args) => ({
    components: { FormField },
    setup: () => ({ args }),
    template: '<FormField v-bind="args" />',
  }),
};

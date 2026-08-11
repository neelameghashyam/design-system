import type { Meta, StoryObj } from '@storybook/vue3';
import Textarea from './Textarea.vue';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: { placeholder: 'Write something…', rows: 4 },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => ({
    components: { Textarea },
    setup: () => ({ args }),
    template: '<Textarea v-bind="args" style="max-width:320px;" />',
  }),
};

export const WithError: Story = {
  args: { error: 'This field cannot be empty' },
  render: (args) => ({
    components: { Textarea },
    setup: () => ({ args }),
    template: '<Textarea v-bind="args" style="max-width:320px;" />',
  }),
};
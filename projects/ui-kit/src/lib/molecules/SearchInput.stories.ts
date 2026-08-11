import type { Meta, StoryObj } from '@storybook/vue3';
import SearchInput from './SearchInput.vue';

const meta: Meta<typeof SearchInput> = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: () => ({
    components: { SearchInput },
    template: '<SearchInput />',
  }),
};

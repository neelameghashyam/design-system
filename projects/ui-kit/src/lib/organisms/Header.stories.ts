import type { Meta, StoryObj } from '@storybook/vue3';
import Header from './Header.vue';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  args: { productName: 'Core UI', userName: 'Ada Lovelace' },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => ({
    components: { Header },
    setup: () => ({ args }),
    template: `
      <Header v-bind="args">
        <template #nav>
          <a href="#">Overview</a>
          <a href="#">Components</a>
          <a href="#">Docs</a>
        </template>
      </Header>
    `,
  }),
};

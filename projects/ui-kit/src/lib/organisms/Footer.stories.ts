import type { Meta, StoryObj } from '@storybook/vue3';
import Footer from './Footer.vue';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: { companyName: 'Your Company' },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => ({
    components: { Footer },
    setup: () => ({ args }),
    template: `
      <Footer v-bind="args">
        <template #links>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </template>
      </Footer>
    `,
  }),
};

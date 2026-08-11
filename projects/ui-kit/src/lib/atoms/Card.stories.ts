import type { Meta, StoryObj } from '@storybook/vue3';
import Card from './Card.vue';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => ({
    components: { Card },
    template: `<Card style="max-width:320px;"><h3>Card title</h3><p>Some supporting content goes here.</p></Card>`,
  }),
};

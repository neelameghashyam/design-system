import type { Meta, StoryObj } from '@storybook/vue3';
import Divider from './Divider.vue';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => ({
    components: { Divider },
    template: '<div style="width:200px;"><p>Above</p><Divider /><p>Below</p></div>',
  }),
};

export const Vertical: Story = {
  render: () => ({
    components: { Divider },
    template: '<div style="display:flex; height:60px; align-items:center;"><span>Left</span><Divider orientation="vertical" /><span>Right</span></div>',
  }),
};
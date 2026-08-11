import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Modal from './Modal.vue';
import Button from '../atoms/Button.vue';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div>
        <Button @click="open = true">Open modal</Button>
        <Modal :open="open" title="Confirm action" @close="open = false">
          <p>Are you sure you want to continue?</p>
          <template #footer>
            <Button variant="ghost" @click="open = false">Cancel</Button>
            <Button variant="primary" @click="open = false">Confirm</Button>
          </template>
        </Modal>
      </div>
    `,
  }),
};

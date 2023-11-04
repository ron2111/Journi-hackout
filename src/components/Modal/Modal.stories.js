import Modal from './Modal';
export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    onKeep: 'onSubmit',
    onDelete: 'onSubmit',
  },
};

const Template = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Are you sure you want to delete this trip?',
  visible: true,
};

export const Invisible = Template.bind({});
Invisible.args = {
  visible: false,
};

export const SaveModal = Template.bind({});
SaveModal.args = {
  children: 'Back home? Your trip will be saved to your history',
};

export const UploadModal = Template.bind({});
UploadModal.args = {
  children: 'Upload image',
};

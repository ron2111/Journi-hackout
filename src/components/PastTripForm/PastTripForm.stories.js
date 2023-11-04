import PastTripForm from './PastTripForm.js';

export default {
  title: 'components/PastTripForm',
  component: PastTripForm,
  argTypes: {
    onHandleNewNote: 'onSubmit',
  },
};

const Template = args => <PastTripForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  _id: '1',
  note: '',
  image: ' ',
};

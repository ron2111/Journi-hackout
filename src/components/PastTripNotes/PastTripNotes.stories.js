import PastTripNotes from './PastTripNotes';

export default {
  title: 'components/PastTripNotes',
  component: PastTripNotes,
  argTypes: {
    onEditNotes: 'onEditNotes',
    onDelete: 'onDelete',
  },
};

const Template = args => <PastTripNotes {...args} />;

export const Default = Template.bind({});
Default.args = {
  notes: [
    {
      note: 'Hello',
      image: '',
      _id: '1',
    },
  ],
};

const templateEdit = args => <PastTripNotes {...args} />;

export const Edit = templateEdit.bind({});
Edit.args = {
  notes: [
    {
      note: 'Hello, write some notes here',
      image: '',
      _id: '1',
    },
  ],
};

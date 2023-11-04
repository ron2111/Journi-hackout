import FutureTripCard from './FutureTripCard.js';

export default {
  title: 'components/FutureTripCard',
  component: FutureTripCard,
  argTypes: {
    onCreateTrip: 'createTrip',
    onEdit: 'edit',
    onFinishTrip: 'finishTrip',
    onDelete: 'delete',
  },
};

const Template = args => <FutureTripCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  _id: '1',
  destination: 'South Africa, Cape Town',
  startDate: '2022-04-28',
  endDate: '2022-04-25',
  coordinates: '0',
  textNotes: 'Passport...',
};

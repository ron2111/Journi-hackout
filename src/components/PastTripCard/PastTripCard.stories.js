import PastTripCard from './PastTripCard.js';

export default {
  title: 'components/PastTripCard',
  component: PastTripCard,
};

const Template = args => <PastTripCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  _id: '1',
  startDate: '2022-11-11',
  endDate: '2022-12-12',
  destination: 'South Africa, Cape Town',
  coordinates: '-33.918861, 18.423300',
};

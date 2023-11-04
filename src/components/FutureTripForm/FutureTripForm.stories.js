import FutureTripForm from './FutureTripForm';

export default {
  title: 'components/FutureTripForm',
  component: FutureTripForm,
  argTypes: {
    onCreateTrip: 'onSubmit',
    onViewPort: 'onViewPort',
  },
};

const Template = args => <FutureTripForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  destination: 'Mexico',
  startDate: '2022-04-28',
  endDate: '2022-04-25',
  textNotes: 'Passport',
  locationInfos: '22.357, -81.568',
  place_name: 'Mexico',
};

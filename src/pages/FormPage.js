import FutureTripForm from '../components/FutureTripForm/FutureTripForm';
import { ReactComponent as Heading } from '../../src/images/logo/new-trip.svg';
import styled from 'styled-components';

export default function FuturePage({ onCreateTrip, locationInfos }) {
  return (
    <>
      <Headline>
        <StyledHeading />
      </Headline>
      <FutureTripForm
        onCreateTrip={onCreateTrip}
        locationInfos={locationInfos}
      />
    </>
  );
}

const StyledHeading = styled(Heading)`
  width: 240px;
`;

const Headline = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

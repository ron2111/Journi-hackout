import FutureTripCard from '../components/FutureTripCard/FutureTripCard';
import styled from 'styled-components';
import { ReactComponent as Heading } from '../../src/images/logo/upcoming-adventure.svg';

export default function FuturePage({
  trips,
  onDeleteCard,
  onFinishTrip,
  onEdit,
  onViewPort,
}) {
  return (
    <>
      <Headline>
        <StyledHeading />
      </Headline>
      <Card>
        {trips.map(
          ({
            startDate,
            endDate,
            destination,
            textNotes,
            _id,
            coordinates,
          }) => {
            return (
              <FutureTripCard
                onDelete={() => onDeleteCard(_id)}
                onFinishTrip={onFinishTrip}
                onEdit={onEdit}
                _id={_id}
                key={_id}
                startDate={startDate}
                endDate={endDate}
                destination={destination}
                textNotes={textNotes}
                coordinates={coordinates}
                onViewPort={onViewPort}
              />
            );
          }
        )}
      </Card>
    </>
  );
}

const Card = styled.ul`
  list-style: none;
  margin: 0 20px 20px 20px;
`;

const StyledHeading = styled(Heading)`
  width: 300px;
`;

const Headline = styled.h2`
  text-align: center;
  margin: 10px 0;
`;

import styled from 'styled-components';
import { useState } from 'react';
import PastTripCard from '../PastTripCard/PastTripCard';

export default function PastTripList({
  onHandleNewNote,
  onDelete,
  history,
  savePicture,
  onViewPort,
  onEditNotes,
}) {
  const [isActive, setIsActive] = useState(true);
  if (!history || history.length === 0) {
    return <Message>Seems like you don't have any past trips yet.</Message>;
  }
  return (
    <>
      <Card role="list">
        {history.map(
          ({
            destination,
            startDate,
            endDate,
            textNotes,
            _id,
            picture,
            notes,
            coordinates,
          }) => {
            return (
              <PastTripCard
                destination={destination}
                startDate={startDate}
                endDate={endDate}
                textNotes={textNotes}
                _id={_id}
                key={_id}
                handleCardToggle={handleCardToggle}
                picture={picture}
                savePicture={savePicture}
                notes={notes}
                onHandleNewNote={onHandleNewNote}
                onDelete={onDelete}
                onViewPort={onViewPort}
                coordinates={coordinates}
                onEditNotes={onEditNotes}
              />
            );
          }
        )}
      </Card>
    </>
  );

  function handleCardToggle() {
    setIsActive(!isActive);
  }
}

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0 20px;
`;

const Message = styled.p`
  text-align: center;
  margin: 20px;
`;

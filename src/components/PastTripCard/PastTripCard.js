import styled from 'styled-components';
import dayjs from 'dayjs';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { MdOutlineNoteAlt as NotesIcon } from 'react-icons/md';
import { useState } from 'react';
import { UploadModal } from '../Modal/Modal';
import PastTripForm from '../PastTripForm/PastTripForm';
import PastTripNotes from '../PastTripNotes/PastTripNotes';
import { MdKeyboardBackspace as BackButton } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BiImageAdd as UploadImage } from 'react-icons/bi';
import { IconButton } from '../Button/Button';

export default function PastTripCard({
  startDate,
  endDate,
  destination,
  textNotes,
  _id,
  savePicture,
  picture,
  onHandleNewNote,
  onDelete,
  notes,
  onViewPort,
  coordinates,
  onEditNotes,
}) {
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [notesVisible, setNotesVisible] = useState(true);

  return (
    <>
      {notesVisible && (
        <Card>
          <Date>
            {dayjs(startDate).format('DD-MM-YY')} <span> to </span>
            {dayjs(endDate).format('DD-MM-YY')}
          </Date>
          <Destination>
            {destination}
            {coordinates[0] !== null ? (
              <StyledLink
                to="/mapPage"
                aria-label="show-on-map"
                onClick={() => onViewPort(coordinates)}
              >
                <IconButton variant="goToMap">
                  <LocationIcon size={25} />
                </IconButton>
                <ScreenReaderOnly>show on map</ScreenReaderOnly>
              </StyledLink>
            ) : undefined}
          </Destination>
          <Notes>{textNotes}</Notes>
          {!picture ? (
            <UploadButtonWrapper>
              <IconButton
                type="button"
                variant="uploadImage"
                aria-labelledby="Upload image"
                onClick={() => setImageModalVisible(!imageModalVisible)}
              >
                <UploadImage size={28} />
              </IconButton>
            </UploadButtonWrapper>
          ) : (
            <UploadedImage src={picture} alt="" />
          )}
          <ButtonWrapper>
            <IconButton
              variant="notes"
              onClick={() => handleCardToggle(_id)}
              aria-labelledby="Enter notes"
            >
              <ScreenReaderOnly>Notes</ScreenReaderOnly>
              <NotesIcon size={25} />
            </IconButton>
          </ButtonWrapper>
        </Card>
      )}
      {imageModalVisible && (
        <UploadModal
          onCancel={() => setImageModalVisible(!imageModalVisible)}
          moveImage={handleImage}
        >
          Save Image?
        </UploadModal>
      )}
      {!notesVisible && (
        <GoBackButton
          aria-labelledby="Return to home page"
          onClick={() => handleCardToggle()}
        >
          <BackButton size={30} />
          <ScreenReaderOnly>Return to home page</ScreenReaderOnly>
        </GoBackButton>
      )}
      {!notesVisible && (
        <>
          <PastTripForm
            onHandleNewNote={onHandleNewNote}
            onClick={() => handleCardToggle()}
            _id={_id}
          />
        </>
      )}
      {!notesVisible &&
        notes?.map(({ note, _id, image }) => {
          return (
            <PastTripNotes
              key={_id}
              note={note}
              onDelete={onDelete}
              image={image}
              _id={_id}
              onEditNotes={onEditNotes}
            />
          );
        })}
    </>
  );

  function handleImage(picture) {
    savePicture(picture, _id);
    setImageModalVisible(!imageModalVisible);
  }
  function handleCardToggle() {
    setNotesVisible(!notesVisible);
  }
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  padding: 15px;
  border-radius: 40px;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  min-height: 330px;

  position: relative;
`;

const Date = styled.span`
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 15px;
`;

const Destination = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid var(--color-white);
  padding-bottom: 3px;
`;

const Notes = styled.p`
  padding-top: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

const UploadedImage = styled.img`
  width: 100%;
  margin: 10px 0;
  border-radius: 8px;
`;

const UploadButtonWrapper = styled.div`
  border: 1px dashed rgba(220, 220, 220, 0.3);
  border-radius: 16px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const GoBackButton = styled.button`
  display: flex;
  justify-content: flex-start;
  border: none;
  background: transparent;
  font-size: 20px;
  color: var(--color-dark-gray);
`;

const StyledLink = styled(Link)`
  color: var(--color-yellow);
  text-decoration: none;
  text-align: center;
  margin: 5px;
  position: relative;
`;

const LocationIcon = styled(MdLocationOn)`
  position: relative;
  bottom: -3px;
  margin: 0 5px;
`;

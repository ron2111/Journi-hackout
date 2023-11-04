import styled from 'styled-components';
import { FiTrash as DeleteIcon } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import { SaveModal } from '../Modal/Modal';
import { useState } from 'react';
import dayjs from 'dayjs';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { FaRegCheckSquare as Checkbox } from 'react-icons/fa';
import { FaEdit as Edit } from 'react-icons/fa';
import Button from '../Button/Button';
import { HiOutlineArrowNarrowRight as Arrow } from 'react-icons/hi';
import { Form } from '../styledComponents/StyledForm';
import { Link } from 'react-router-dom';
import { MdLocationOn as Location } from 'react-icons/md';
import { IconButton } from '../Button/Button';

export default function FutureTripCard({
  onDelete,
  startDate,
  endDate,
  destination,
  textNotes,
  onFinishTrip,
  _id,
  onEdit,
  coordinates,
  onViewPort,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          aria-labelledby="edit-form"
        >
          <ScreenReaderOnly>
            <h2 id="edit-form">Edit notes</h2>
          </ScreenReaderOnly>
          <div>
            <Label htmlFor="destination">Destination:</Label>
            <Input type="text" id="destination" defaultValue={destination} />
          </div>
          <InputDateWrapper>
            <div>
              <Label htmlFor="startDate">Start:</Label>
              <InputDate type="date" id="startDate" defaultValue={startDate} />
            </div>
            <span>
              <ArrowIcon size={15} />
            </span>
            <div>
              <Label htmlFor="endDate">End:</Label>
              <InputDate type="date" id="endDate" defaultValue={endDate} />
            </div>
          </InputDateWrapper>

          <div>
            <Label htmlFor="textNotes">Enter notes:</Label>
            <Textarea
              type="text"
              id="textNotes"
              defaultValue={textNotes}
              maxLength="500"
              rows="3"
            />
          </div>
          <ButtonWrapper>
            <Button variant="add" category="Save changes" type="submit">
              Submit changes
            </Button>
          </ButtonWrapper>
        </Form>
      ) : (
        <div>
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
                  <IconButton variant="goToMap" type="button">
                    <LocationIcon size={25} />
                  </IconButton>
                  <ScreenReaderOnly>show on map</ScreenReaderOnly>
                </StyledLink>
              ) : undefined}
            </Destination>

            <Notes>{textNotes}</Notes>
            <ButtonWrapper>
              <IconButton
                variant="delete"
                type="button"
                aria-labelledby="Delete your trip"
                onClick={() => setIsVisible(!isVisible)}
              >
                <DeleteIcon size={25} />
                <ScreenReaderOnly>Delete card</ScreenReaderOnly>
              </IconButton>

              <IconButton
                variant="edit"
                type="button"
                aria-labelledby="Edit your entry"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit size={25} />
                <ScreenReaderOnly>Edit entry</ScreenReaderOnly>
              </IconButton>

              <IconButton
                variant="done"
                type="button"
                aria-labelledby="Finish your trip"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Checkbox size={25} />
                <ScreenReaderOnly>Finish trip</ScreenReaderOnly>
              </IconButton>
            </ButtonWrapper>
          </Card>
        </div>
      )}
      {isVisible && (
        <Modal onDelete={onDelete} onKeep={() => setIsVisible(!isVisible)}>
          Are you sure you want to delete this trip?
        </Modal>
      )}
      {isOpen && (
        <SaveModal
          onKeep={() => setIsOpen(!isOpen)}
          onFinishTrip={() =>
            onFinishTrip(
              startDate,
              endDate,
              destination,
              textNotes,
              _id,
              coordinates
            )
          }
        >
          Back home? Your trip will be saved to your history
        </SaveModal>
      )}
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const { startDate, endDate, destination, textNotes } =
      event.target.elements;
    onEdit({
      _id: _id,
      startDate: startDate.value,
      endDate: endDate.value,
      destination: destination.value,
      textNotes: textNotes.value,
    });
    setIsEditing(false);
  }
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  padding: 15px 15px 5px 15px;
  margin-bottom: 20px;
  border-radius: 40px;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  height: 330px;
  box-shadow: var(--box-shadow);
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
  padding-bottom: 2px;
`;

const Notes = styled.p`
  padding-top: 15px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 10px;
`;

const InputDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const InputDate = styled.input`
  color: gray;
  margin-top: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const ArrowIcon = styled(Arrow)`
  margin: 7px;
`;

const StyledLink = styled(Link)`
  color: var(--color-yellow);
  text-decoration: none;
  text-align: center;
  margin: 5px;
  position: relative;
`;

const LocationIcon = styled(Location)`
  position: relative;
  bottom: -3px;
  margin: 0 5px;
`;

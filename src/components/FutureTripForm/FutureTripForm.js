import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Button from '../Button/Button';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import {
  Form,
  Label,
  DateWrapper,
  FormWrapper,
  InputDate,
} from '../styledComponents/StyledForm';
import { Link } from 'react-router-dom';
import { IconButton } from '../Button/Button';

export default function FutureTripForm({ onCreateTrip, locationInfos }) {
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  };

  return (
    <Wrapper>
      <Form
        aria-labelledby="future-trips-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <ScreenReaderOnly>
          <h2 id="future-trips-form">New Trip</h2>
        </ScreenReaderOnly>
        <Label htmlFor="destination">
          Destination:
          <Input
            defaultValue={
              locationInfos ? locationInfos[2].place_name : undefined
            }
            type="text"
            id="destination"
            name="destination"
            maxLength="150"
            placeholder="Country/City - click to search on map"
            required
          />
          <StyledLink to="/mapPage">
            <IconButton variant="goToMap">
              <LocationIcon size={25} />
            </IconButton>
          </StyledLink>
        </Label>

        <DateWrapper>
          <div>
            <Label htmlFor="startDate">Start:</Label>
            <InputDate
              type="date"
              id="startDate"
              name="startDate"
              min={disablePastDate()}
              required
            />
          </div>
          <span>
            <ArrowIcon size={15} />
          </span>
          <div>
            <Label htmlFor="endDate">End:</Label>
            <InputDate
              type="date"
              id="endDate"
              name="endDate"
              min={disablePastDate()}
              required
            />
          </div>
        </DateWrapper>
        <Label htmlFor="textNotes">Notes:</Label>
        <ScreenReaderOnly id="textNotes">Enter notes</ScreenReaderOnly>
        <textarea
          type="text"
          id="textNotes"
          name="textNotes"
          placeholder="Documents, Visa, Packing List..."
          maxLength="500"
          rows="3"
        />
        <ButtonWrapper>
          <Button variant="add">Create Trip</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const { destination, startDate, endDate, textNotes } =
      event.target.elements;
    onCreateTrip({
      destination: destination.value,
      startDate: startDate.value,
      endDate: endDate.value,
      textNotes: textNotes.value,
      coordinates: [locationInfos[0], locationInfos[1]],
      _id: nanoid(),
    });
  }
}

const Wrapper = styled(FormWrapper)`
  margin-top: 8vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowIcon = styled(HiOutlineArrowNarrowRight)`
  margin: 7px;
`;

const LocationIcon = styled(MdLocationOn)`
  position: absolute;
  top: 35px;
`;

const Input = styled.input`
  margin-top: 10px;
  padding-left: 30px;
`;

const StyledLink = styled(Link)`
  color: var(--color-yellow);
`;

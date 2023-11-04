import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { Form, Label, Textarea } from '../styledComponents/StyledForm';
import { Image } from '../styledComponents/StyledImageUpload';
import axios from 'axios';
import { MdOutlineCloudUpload as Upload } from 'react-icons/md';
import {
  ImageUpload,
  RemoveImage,
  ImageWrapper,
} from '../styledComponents/StyledImageUpload';
import { IconButton } from '../Button/Button';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function PastTripNotes({ onHandleNewNote, _id }) {
  const [image, setImage] = useState('');
  const [process, setProcess] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Form
        aria-labelledby="notes-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Label htmlFor="notes">Things to remember:</Label>
        <ScreenReaderOnly id="notes-form">
          Enter notes to remember
        </ScreenReaderOnly>
        <Textarea
          type="text"
          id="notes"
          name="notes"
          placeholder="Enter your notes..."
          maxLength="500"
          rows="5"
          required
        />
        {loading && <div>Uploading Image...{process}%</div>}
        <ImageUpload>
          {image ? (
            <ImageWrapper>
              <Image src={image} alt="" />
              <IconButton
                variant="deleteImage"
                onClick={handleRemovePic}
                aria-label="Remove Image"
              >
                <RemoveImage size={20} />
              </IconButton>
            </ImageWrapper>
          ) : (
            <>
              <input
                type="file"
                name="file"
                aria-label="Upload a picture"
                onChange={upload}
                multiple="multiple"
                id="files"
              />
              <Label htmlFor="files">
                Upload image
                <ScreenReaderOnly>Upload your image</ScreenReaderOnly>
                <IconButton variant="changeImage">
                  <UploadIcon size={25} />
                </IconButton>
              </Label>
            </>
          )}
        </ImageUpload>
        <ButtonWrapper>
          <Button variant="add" type="submit">
            Save
          </Button>
        </ButtonWrapper>
      </Form>
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.notes.value.trim();
    onHandleNewNote({ note: inputValue, image }, _id);
    form.reset();
    setImage('');
  }

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();

    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          setLoading(true);
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProcess(percent);
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
    setLoading(false);
  }

  function handleRemovePic() {
    setImage('');
    setProcess(0);
    setLoading(false);
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const UploadIcon = styled(Upload)`
  position: absolute;
  bottom: 5px;
  right: 20px;
  color: var(--color-yellow);
`;

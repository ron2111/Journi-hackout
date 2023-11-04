import styled from 'styled-components';
import { MdOutlineCloudUpload as Upload } from 'react-icons/md';
import { TiDeleteOutline as DeleteImage } from 'react-icons/ti';

const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  input[type='file'] {
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: -1px;
    left: 0;
    width: 0.1px;
    height: 0.1px;
  }

  label[for='files'] {
    position: relative;
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    background-color: var(--color-gray);
    color: var(--color-light-gray);
    width: 170px;
  }
`;

const EditImageUpload = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  input[type='file'] {
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: -1px;
    left: 0;
    width: 0.1px;
    height: 0.1px;
  }

  label[for='files-edit'] {
    position: relative;
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    box-shadow: var(--box-shadow);
    background-color: var(--color-gray);
    color: var(--color-light-gray);
    width: 170px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 70%;
  position: relative;
`;

const UploadIcon = styled(Upload)`
  position: absolute;
  bottom: 5px;
  right: 20px;
  color: var(--color-yellow);
`;

const RemoveImage = styled(DeleteImage)`
  position: absolute;
  top: 0;
  right: 0;
`;

export {
  EditImageUpload,
  ImageWrapper,
  Image,
  UploadIcon,
  RemoveImage,
  ImageUpload,
};

import styled, { css } from 'styled-components';

export default styled.button`
  font-family: 'Lexend Peta', sans-serif;
  text-decoration: none;
  color: black;
  background-color: var(--color-white);
  color: var(--color-dark-gray);
  border: none;
  border-radius: 16px;
  padding: 5px;
  margin: 5px 0;
  width: 150px;
  position: relative;

  ${props =>
    props.variant === 'add' &&
    css`
      background-color: var(--color-yellow);
      color: var(--color-dark-gray);
      text-transform: uppercase;
    `}

  ${props =>
    props.variant === 'submit' &&
    css`
      background-color: var(--color-yellow);
      color: var(--color-dark-gray);
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'danger' &&
    css`
      background-color: var(--color-white);
      color: var(--color-dark-gray);
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'submitEdit' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);
    `}

    ${props =>
    props.variant === 'save' &&
    css`
      background-color: var(--color-yellow);
      color: var(--color-dark-gray);
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'keep' &&
    css`
      background-color: var(--color-white);
      color: var(--color-dark-gray);
      text-transform: uppercase;
    `}
`;

const IconButton = styled.button`
  background: transparent;
  border: none;

  ${props =>
    props.variant === 'uploadImage' &&
    css`
      color: var(--color-white);
    `}

  ${props =>
    props.variant === 'notes' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);
      margin: 0;

      &:hover {
        color: var(--color-yellow);
      }
    `}

    ${props =>
    props.variant === 'goToMap' &&
    css`
      color: var(--color-yellow);
    `}

    ${props =>
    props.variant === 'delete' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-yellow);
      }
    `}

    ${props =>
    props.variant === 'edit' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-yellow);
      }
      &.active {
        color: var(--color-yellow);
      }
    `}

    ${props =>
    props.variant === 'done' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-yellow);
      }
    `}

    ${props =>
    props.variant === 'upload' &&
    css`
      position: absolute;
      bottom: 8px;
      right: 20px;
      color: var(--color-yellow);
    `}

    ${props =>
    props.variant === 'changeImage' &&
    css`
      position: absolute;
      bottom: 2px;
      right: 5px;
      color: var(--color-yellow);
    `}

    ${props =>
    props.variant === 'deleteImage' &&
    css`
      background-color: transparent;
      color: var(--color-white);
      margin: 0;
      padding: 0;
      width: 15px;
    `}

    ${props =>
    props.variant === 'deleteImage' &&
    css`
      background-color: transparent;
      color: var(--color-white);
      margin: 0;
      padding: 0;
      width: 15px;
    `}
`;

export { IconButton };

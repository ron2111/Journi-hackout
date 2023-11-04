import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 20px;
  margin-bottom: 15px;
  color: var(--color-white);
  border: 1px solid var(--color-dark-gray);
  background-color: var(--color-dark-gray);
  border-radius: 40px;
  box-shadow: var(--box-shadow);
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: relative;
`;

const Textarea = styled.textarea`
  padding: 5px;
  margin-top: 5px;
  width: 100%;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const InputDate = styled.input`
  color: gray;
  margin-top: 12px;
`;

export { Form, Label, Textarea, DateWrapper, FormWrapper, InputDate };

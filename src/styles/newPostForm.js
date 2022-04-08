import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-top: 7rem;
  display: flex;
  justify-content: flex-start;
  width: 37vw;
  padding: 0.4rem;
  height: 20vh;
  background-color: #F0F8FF;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 0.3vw;

  p {
    margin-top: 0.8rem;
    font-size: 1.2rem;
  }
`;

export const TitleField = styled.input`
  background-color: white;
  height: 13%;
  width: 100%;
  margin-bottom: 0.4rem;
  border-radius: 0.2vw;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
  font-size: 1.1rem;
  padding: 1rem;

  ::placeholder {
    color: #A9A9A9;
  }
`;

export const ContentField = styled.textarea`
  margin-bottom: 0.3em;
  background-color: white;
  height: 50%;
  width: 100%;
  resize: none;
  border-radius: 0.2vw;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
  font-size: 1.1rem;
  padding: 1rem;

  ::placeholder {
    color: #A9A9A9;
  }
`;

export const SubmitButton = styled.button`
  width: 15%;
  padding: 0.8rem 1rem;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #0066b2;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #00BFFF;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
`;
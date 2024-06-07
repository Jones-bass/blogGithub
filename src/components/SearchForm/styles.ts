import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 65%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;

  h3 {
    font-size: clamp(1rem, 1.2vw, 2rem);
  }

  p {
    font-size: clamp(0.7rem, 1vw, 1rem);
  }

  .containerText {
    display: flex;
    margin-bottom: 1%;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    color: ${(props) => props.theme.Text};
  }

  @media (max-width: 720px) {
    width: 80%;
  }
`
export const SearchFormContainer = styled.form`
  display: flex;
  gap: 0.5rem;

  margin: 1% 0% 5% 0%;
  input {
    font-size: clamp(0.7rem, 1vw, 1rem);

    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.input};
    color: ${(props) => props.theme.label};
    padding: 2%;

    &::placeholder {
      color: ${(props) => props.theme.label};
    }
  }

  button {
    font-size: clamp(0.7rem, 1vw, 1rem);

    display: flex;
    align-items: center;
    gap: 0.5rem;

    background: ${(props) => props.theme.input};
    color: ${(props) => props.theme.Text};

    border: 0;
    padding: 2%;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: transparent;
      color: ${(props) => props.theme.blue};
    }
  }
`

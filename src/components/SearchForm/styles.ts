import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 65%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .containerText {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    color: ${(props) => props.theme.Text};
  }

  @media (max-width: 720px) {
    width: 80%;

    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`
export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.input};
    color: ${(props) => props.theme.label};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.label};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background: ${(props) => props.theme.input};
    color: ${(props) => props.theme.Text};

    border: 0;
    padding: 1rem;
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

    @media (max-width: 720px) {
      gap: 0rem;
      width: 5rem;
    }
  }
`

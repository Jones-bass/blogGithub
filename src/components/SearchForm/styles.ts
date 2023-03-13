import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  padding: 40px;
  display: flex;
  gap: 1rem;
  width: 71%;
  margin: auto;

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

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.input};
      border: 1px solid ${(props) => props.theme.Subtitle};
      color: ${(props) => props.theme.Text};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`

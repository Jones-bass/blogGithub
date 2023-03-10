import styled from 'styled-components'

export const ContainerList = styled.div`
  background-color: ${(props) => props.theme.border};
  max-width: 16rem;
  border-radius: 0.1rem 1rem 0.1rem 1rem;
  padding: 1rem;
  margin-bottom: 2.625rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  position: relative;

  strong {
    font-size: 2rem;

    text-align: center;
  }

  p {
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 8px;
    padding: 8px;
    background: ${(props) => props.theme.green100};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    &:hover {
      background: ${(props) => props.theme.green300};
    }
  }
`

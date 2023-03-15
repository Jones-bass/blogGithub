import styled from 'styled-components'

export const ContainerList = styled.div`
  background-color: ${(props) => props.theme.post};
  border-radius: 8px;

  text-align: center;

  width: 95%;
  height: 90%;

  margin: auto;
  padding: 5rem 0rem 5rem 0rem;

  strong {
    font-size: 1.2rem;

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

    width: 20rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;

    transition: 0.3s;

    &:hover {
      background: ${(props) => props.theme.green300};
    }
  }
`

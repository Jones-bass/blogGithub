import styled from 'styled-components'

export const ContainerList = styled.div`
  background-color: ${(props) => props.theme.border};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  border-radius: 0.8rem;
  padding: 2rem;
  margin-bottom: 10rem;

  width: 80%;
  height: 90%;

  display: flex;

  flex-direction: column;
  margin: auto;

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

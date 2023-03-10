import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 65%;
  margin: auto;
  margin-top: -70px;

  padding: 35px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  background-color: ${(props) => props.theme.profile};

  > img {
    width: 20%;
    height: 20%;

    border-radius: 8px;
  }
`

export const ContainerText = styled.div`
  margin: 10px;
  width: 100%;

  h1 {
    margin-top: 10px;
    font-weight: 700;

    font-size: clamp(1rem, 2vw, 2rem);

    color: ${(props) => props.theme.title};
  }

  p {
    margin-top: 10px;

    font-weight: 400;
    font-size: clamp(0.5rem, 1vw, 1rem);

    color: ${(props) => props.theme.Text};

    margin-bottom: 25px;
  }

  .div {
    width: 56%;
    position: absolute;
    top: 260px;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.blue};

    span {
      display: flex;

      font-size: clamp(0.5rem, 1vw, 1rem);
      align-items: center;
      text-align: center;
      color: ${(props) => props.theme.blue};
    }
  }
`

export const Icon = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
`

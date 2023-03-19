import styled, { css } from 'styled-components'

interface ContainerProps {
  variant: string
}

export const Main = styled.main`
  width: 100%;
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 65%;
  height: 200px;

  margin: auto;
  margin-top: -70px;

  padding: 35px;

  align-items: flex-start;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: ${(props) => props.theme.profile};

  > img {
    width: 20%;
    height: 100%;

    border-radius: 8px;
  }

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      padding: 50px 15px 15px 20px;
      .div {
        margin-top: 0.5rem;
      }
      img {
        display: none;
      }
    `}
`

export const ContainerText = styled.div`
  margin: 0px 0px 0px 20px;
  width: 100%;

  h1 {
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
    width: 59%;
    position: absolute;
    top: 240px;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.blue};

    > a {
      color: ${(props) => props.theme.blue};
    }

    span {
      display: flex;
      cursor: pointer;

      font-size: clamp(0.5rem, 1vw, 1rem);
      align-items: center;
      text-align: center;
      color: ${(props) => props.theme.blue};
    }
  }
`

export const IconContainer = styled.div`
  width: 60%;
  display: flex;
  gap: 0.8rem;
`
export const IconContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => props.theme.title};

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.theme.title};
  }
`

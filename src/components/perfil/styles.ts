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
      padding: 70px 0px 0px 20px;
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

export const Icon = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
`

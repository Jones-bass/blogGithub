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

  margin: auto;
  margin-top: -70px;

  padding: 30px;

  align-items: flex-start;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: ${(props) => props.theme.profile};

  @media (max-width: 720px) {
    padding: 15px;
    width: 80%;
    height: auto;
  }

  > img {
    max-width: 100px;
    object-fit: cover;
    margin-right: 1rem;

    border-radius: 8px;

    @media (max-width: 720px) {
      max-width: 90px;
    }
  }

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      .header {
        margin-top: 0.5rem;
      }
      img {
        display: none;
      }
    `}
`

export const ContainerText = styled.div`
  width: 100%;

  h1 {
    font-weight: 700;

    font-size: clamp(1rem, 2vw, 2rem);

    color: ${(props) => props.theme.title};
  }

  p {
    text-align: justify;
    font-size: clamp(0.6rem, 1vw, 1rem);

    color: ${(props) => props.theme.Text};

    margin-bottom: 14px;
  }

  .link {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    font-size: clamp(0.5rem, 1vw, 1rem);
  }

  @media (max-width: 720px) {
    .header {
      width: 100%;
    }
  }
`

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;

  gap: 1rem;

  transition: transform 0.2s, box-shadow 0.2s;

  @media (max-width: 720px) {
    gap: 0.2rem;
    text-align: center;
  }
  > * {
    transition: transform 0.2s, box-shadow 0.2s;

    :hover {
      transform: scale(1.05);
      color: ${(props) => props.theme.blue};
    }
  }
`
export const IconContent = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  text-align: center;
  font-size: clamp(0.6rem, 1vw, 1rem);

  color: ${(props) => props.theme.title};

  @media (max-width: 720px) {
    font-size: 0.56rem;
  }

  a {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    color: ${(props) => props.theme.title};
    transition: transform 0.2s, color 0.2s;

    &:hover {
      transform: scale(1.05);
      color: ${(props) => props.theme.blue};
    }
  }
`

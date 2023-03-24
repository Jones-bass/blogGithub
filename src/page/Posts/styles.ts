import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 2rem;

  p {
    color: ${(props) => props.theme.Subtitle};
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: justify;
  }

  @media (max-width: 720px) {
    p {
      font-size: 0.7rem;
      line-height: 1rem;
    }
  }

  h3 {
    color: ${(props) => props.theme.blue};
  }

  img {
    margin-top: 2rem;
    max-width: 100%;
  }

  @media (max-width: 720px) {
    font-size: 0.5rem;
  }
`

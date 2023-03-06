import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 180px 620px;
  padding: 35px;
`

export const ContainerImg = styled.div`
  img {
    width: 148px;
    height: 148px;
    left: 40px;

    border-radius: 8px;
  }
`

export const ContainerText = styled.div`
  h1 {
    margin-top: 10px;
    font-weight: 700;
    font-size: 24px;

    color: ${(props) => props.theme.title};
  }

  p {
    margin-top: 10px;

    font-weight: 400;
    font-size: 16px;

    color: ${(props) => props.theme.Text};

    margin-bottom: 25px;
  }
`

export const Icon = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
`

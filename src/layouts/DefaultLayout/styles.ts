import styled from 'styled-components'

import img from '../../assets/backgroundHeader.png'

export const LayoutContainer = styled.div`
  max-width: 100%;
  height: 296px;

  background: ${(props) => props.theme.layout};

  display: flex;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

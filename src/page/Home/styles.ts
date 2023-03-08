import styled from 'styled-components'

import img from '../../assets/Background.png'

export const BannerSession = styled.div`
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const ContainerMain = styled.div`
  display: flex;
  width: 864px;
  height: 212px;
  margin: auto;
  margin-top: -70px;

  /* Base/Profile */

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  background-color: ${(props) => props.theme.profile};
`

import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  width: 864px;
  height: 212px;
  margin: auto;
  margin-top: 208px;

  /* Base/Profile */

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  background-color: ${(props) => props.theme.profile};
`

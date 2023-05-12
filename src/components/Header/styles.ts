import styled from 'styled-components';


export const HeaderContainer = styled.header `
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10rem ;
  
  img {
    margin-left: 10rem ;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 0.8571rem;
    padding: 8px;
    align-items: center;
    justify-content: center;
    height: 38px;
  }
`

export const ContainerCart = styled.div `
  height: inherit;
  width: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.42rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-300']};
  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme['yellow-300']};
  }
`

export const ContainerLocation = styled.div `
  display: flex;
  height: inherit;
  border-radius: 0.42rem;
  align-items: center;
  gap: 0.1rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-900']};
  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

`
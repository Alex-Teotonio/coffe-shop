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

  .container {
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
  width: 3.25rem;
  display: flex;
  flex-direction: row;
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


export const ContainerCartValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  small {
    display: flex ;
    justify-content: center;
    margin-left: -0.7rem;
    align-items: center;
    border-radius: 1000px;
    color: white;
    background: ${(props) => props.theme['yellow-300']};
    margin-top: -0.5rem;
    margin-top: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }
  
`
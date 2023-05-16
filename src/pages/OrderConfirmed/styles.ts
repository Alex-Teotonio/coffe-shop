import styled from 'styled-components';
interface ContainerIconProps {
  backgound: string
}

export const OrderParent = styled.div`

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

`
export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  margin-top: 5rem;

  .orderConfirmed {
    color: ${(props) => props.theme['yellow-300']};
    line-height: 1.3;
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
  }


  .subTitleOrdered {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-200']};
  }
  .titleOrdered {
    span{
      display: block;
    }
  }
`

export const OrderInformationDelivery = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid red;
  border-image-source: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);


  div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    
    .container {
      display: flex;
      flex-direction: column;
      
      span{
        line-height: 1.3;
        color: ${(props) => props.theme[ 'gray-200']};
      }
    }
  }
`
export const ContainerIcon = styled.div<ContainerIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.backgound};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  svg {
    color: white;
    width: 1rem;
    height: 1rem;
  } 
`

export const ImageContainer = styled.img`
  width: 30.75rem;
  height: 18.31rem;
  margin-top: 9rem;
  margin-left: 6.375rem;
`
import styled from 'styled-components';


export const TitlePage = styled.strong`
  color: ${(props) => props.theme['gray-200']};
  margin-left:10rem;
  line-height: 1.3;
  font-size: 2rem;
  margin-bottom: 3.375rem;
`

export const CoffeListContainer = styled.div`
  display: flex;
  width: 70rem;
  margin: 0 10rem;
  flex-wrap: wrap;
  gap: 2rem;
`

export const CoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  border-radius: 0.875rem 2.375rem;
  background: ${(props) => props.theme['gray-125']};

  img {
    width: 6.25rem;
    height: 6.25rem;
    margin-top: -1rem;
  }

  .card-content {
    margin-top: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    height: 1.26rem;

    small {
      font-size: 0.625rem ;
      padding: 0.25rem 0.5rem;
      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-300']};
    }
  }

  
  span {
    line-height: 1.3;
    color: ${(props) => props.theme['gray-200']};
    margin-top: 1rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  & > p {
    color: ${(props) => props.theme['gray-175']};
    font-size: 0.875rem;
    text-align: center;
    height: 2.25rem;
    line-height: 1.3;
    margin-top: 0.5rem;
    margin-right: 1.25rem;
    margin-left: 1.25rem;

  }
`   

export const FooterCard = styled.div`
  display: flex;
  align-items: flex-start;
  width: 13rem;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.25rem;
  margin-top: 2.025rem;

  .shopping-cart {
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['purple-900']};;
    padding: 0.5rem;
    border: none;
    
  }

  & > p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-150']};
  }
`
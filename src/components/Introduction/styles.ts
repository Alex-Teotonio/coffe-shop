import styled from 'styled-components';

interface ContainerIconsProps  {
  background: string
}
export const IntroductionContainer = styled.div`
  height: 34rem;
  padding-top: 5.875rem;
  margin-left: 10.5rem;
  display: flex;
  gap:5.5rem ;
`


export const ContentTextIntroduction = styled.div`
  width: 37.95rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4.125rem;

  strong {
    font-size: 3rem;
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-200']};
  }
`


export const ContainerItems = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 2.5rem;
  width: 35.43rem;
`

export const ContainerIcons = styled.div<ContainerIconsProps>`
  display: flex;
  gap: 0.750rem;
  align-items: center;

  div {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.background};
    border-radius: 50%;
    padding: 0.5rem;
    color: white;
  }

  span {
    color: ${(props) => props.theme['gray-150']};
  }
`

export const ContainerImage = styled.div`
  img {
    width: 29.75rem ;
    height: 22.5rem;
  }
`
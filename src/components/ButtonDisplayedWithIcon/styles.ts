import styled from 'styled-components';

interface ButtonDisplayedWithIconProps {
  gap: string,
  width: string,
  padding: string
}


export const Button = styled.button<ButtonDisplayedWithIconProps>`
    display: flex;
    align-items: center;
    padding: ${(props) => props.padding};
    gap: ${(props) => props.gap};
    background: ${(props) => props.theme['gray-120']};
    width: ${(props) => props.width};
    border-radius: 0.375rem;
    border: none;
    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme['gray-150']};
    }
    svg{
      width: 1rem;
      height: 1rem;
      color: ${(props) => props.theme['purple-200']};
    }
`
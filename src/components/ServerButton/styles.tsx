import styled from 'styled-components'
import { Props } from '.'

export const Button = styled.button<Props>`
  width: 48px;
  height: 48px;
  display: flex;
  flex-shrink: 0;
  cursor: pointer;
  margin-bottom: 8px;
  position: relative;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: border-radius .2s, background-color .2s;
  background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  
  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 7px;
    height: 7px;
    left: -10px;
    content: '';
    position: absolute;
    border-radius: 50%;
    top: calc(50% - 3.5px);
    background-color: var(--white);
    display: ${(props) => props.hasNotification ? 'inline' : 'none'};
  }

  &::after {
    width: auto;
    right: -4px;
    bottom: -4px;
    height: 16px;
    padding: 0 4px;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    text-align: center;
    color: var(--white);
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    background-color: var(--notification);
    content: '${(props) => props.mentions}';
    display: ${(props) => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }

`;

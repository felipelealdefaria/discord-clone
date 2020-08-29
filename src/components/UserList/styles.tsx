import styled from 'styled-components'

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0px 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--tertiary);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`

export const Role = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
  color: var(--gray);
  text-transform: uppercase;
`

export const User = styled.div`
  padding: 5px;
  display: flex;
  cursor: pointer;
  margin-top: 5px;
  border-radius: 4px;
  align-items: center;
  background: transparent;
  transition: background 0.2;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  > strong {
    opacity: 0.7;
    margin-left: 13px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    color: var(--white);
    text-overflow: ellipsis;
  }

  > span {
    font-size: 11px;
    margin-left: 9px;
    padding: 4px 5px;
    font-weight: bold;
    border-radius: 4px;
    color: var(--white);
    text-transform: uppercase;
    background-color: var(--discord);
  }
`

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`
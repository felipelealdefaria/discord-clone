import styled from 'styled-components'
import { AlternateEmail } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px);
  justify-content: space-between;
  background-color: var(--primary);

`
export const Messages = styled.div`
  display: flex;
  padding: 20px 0px;
  overflow-y: scroll;
  flex-direction: column;
  max-height: calc(100vh - 46px -68px);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--tertiary);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px 10px 16px;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 44px;
  position: relative;
  border-radius: 7px;
  color: var(--white);
  padding: 0 10px 0 57px;
  background-color: var(--chat-input);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    top: 23%;
    left: 3%;
    position: absolute;
    transition: 180ms ease-in-out;
  }
`

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--gray);
`
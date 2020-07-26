import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;
  display: flex;
  padding: 11px 0;
  max-height: 100vh;
  overflow-y: scroll;
  align-items: center;
  flex-direction: column;
  background-color: var(--tertiary);
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Separator = styled.div`
  width: 32px;
  margin-bottom: 8px;
  border-bottom: 2px solid var(--quaternary);
`
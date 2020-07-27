import styled from 'styled-components'
import { ExpandMore } from 'styled-icons/material'

export const Container = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 11px 0 16px;
  justify-content: space-between;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: var(--white);
`
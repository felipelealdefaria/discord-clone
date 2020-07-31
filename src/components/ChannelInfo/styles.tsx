import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'

export const Container = styled.div`
  z-index: 2;
  grid-area: CI;
  display: flex;
  padding: 0 17px;
  align-items: center;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`

export const Title = styled.h2`
  font-size: 16px;
  margin-left: 9px;
  font-weight: bold;
  color: var(--white);
`

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  opacity: 0.2;
  margin: 0 13px;
  background-color: var(--white);
`

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`

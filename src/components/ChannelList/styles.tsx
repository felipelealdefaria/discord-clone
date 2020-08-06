import styled from 'styled-components'
import { Add } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`

export const Category = styled.div`
  display: flex;
  margin-bottom: 6px;
  align-items: center;
  justify-content: space-between;
  
  > span {
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
    text-transform: uppercase;
  }
`

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  cursor: pointer;
  color: var(--symbol);
`
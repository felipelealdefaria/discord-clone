import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
  }
`

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: var(--symbol);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`

export const SettingIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: 4px;
  color: var(--symbol);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`
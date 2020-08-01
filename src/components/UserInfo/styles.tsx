import styled from 'styled-components'
import { Mic, Headset, Settings } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: UI;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`;

export const UserData = styled.div`
  display: flex;
  margin-left: 8px;
  flex-direction: column;

  > strong {
    display: block;
    font-size: 13px;
    color: var(--white);
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  opacity: 0.7;
  cursor: pointer;
  color: var(--white);
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  opacity: 0.7;
  cursor: pointer;
  color: var(--white);
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;
  opacity: 0.7;
  cursor: pointer;
  color: var(--white);
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
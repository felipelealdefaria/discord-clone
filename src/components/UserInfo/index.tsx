import React from 'react'
import { 
  Icons,
  Avatar,
  MicIcon,
  Profile,
  UserData,
  Container,
  SettingsIcon,
  HeadphoneIcon,
} from './styles'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong> Felipe Leal</strong>
          <span>#6064</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo
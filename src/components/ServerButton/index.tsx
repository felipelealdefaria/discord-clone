/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotification, mentions }) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src='https://rocketseat.com.br/static/images/logo-rocketseat.svg' alt='Rocketseat' />}
    </Button>
  );
}

export default ServerButton;
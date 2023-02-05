import React from 'react';

import {
  ContainerCardContact,
  Title,
  Subtitle,
  SocialNetwork,
} from './cardContact.js';

export function CardContact({ title, message, valueRef, titleRef }) {
  return (
    <ContainerCardContact>
      <Title>{title}</Title>
      <Subtitle>{message}</Subtitle>
      <SocialNetwork href={valueRef}>{titleRef}</SocialNetwork>
    </ContainerCardContact>
  );
}

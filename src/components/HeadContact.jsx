import React from 'react';

import {
  ParagraphHeadContact,
  TitleContact,
  SubtitleContact,
} from '../styles/headContact.js';

export function HeadContact() {
  return (
    <div>
      <ParagraphHeadContact>Contato</ParagraphHeadContact>

      <TitleContact>Bora se conectar?</TitleContact>

      <SubtitleContact>Me siga na minhas redes sociais abaixo.</SubtitleContact>
    </div>
  );
}

import React from 'react';
import { CardContact } from '../components/CardContact.jsx';
import { Head } from '../components/Head.jsx';
import { HeadContact } from '../components/HeadContact.jsx';

import { Section, ContainerElements, BoxContact } from '../styles/contact.js';

export function Contact() {
  return (
    <Section>
      <ContainerElements>
        <HeadContact />

        <BoxContact>
          <CardContact
            image="https://img.icons8.com/color/256/apple-mail.png"
            title="Email"
            message="Entre em contato comigo via email"
            valueRef="lucasanselmodasilva02@gmail.com"
            titleRef="lucasanselmodasilva02@gmail.com"
          />

          <CardContact
            title="GitHub"
            message="Veja meus projetos no Github"
            valueRef="https://github.com/LucasAnselmoSilva12345/"
            titleRef="LucasAnselmoSilva12345"
          />

          <CardContact
            title="Twitter"
            message="Me seguia lá no Twitter"
            valueRef="https://twitter.com/LucasAnselmo202"
            titleRef="LucasAnselmo202"
          />

          <CardContact
            title="Facebook"
            message="Me seguia lá no Facebook"
            valueRef="https://www.facebook.com/lucas.anselmomoraesdasilva"
            titleRef="Lucas Anselmo Moraes"
          />

          <CardContact
            title="LinkedIn"
            message="Me seguia lá no LinkedIn"
            valueRef="https://www.linkedin.com/in/lucas-anselmo-moraes-da-silva-543636161/"
            titleRef="Lucas Anselmo"
          />
        </BoxContact>
      </ContainerElements>

      <Head title="Contato" />
    </Section>
  );
}

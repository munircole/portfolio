import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Image } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <Image src="/images/munir.jpeg" />

        <SectionTitle main center>
          Ibrahim Munirudeen <br />
          <small>Frontend Engineer</small>
        </SectionTitle>
        <SectionText>
          I am a highly motivated web designer and software developer with over 3 years of experience. i have great interest in artificial intelligence and i'm always open to learning new things and improving on my skills
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
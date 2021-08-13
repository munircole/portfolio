import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Image } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Ibrahim Munirudeen <br />
          <small>Freelance Software Developer</small>
        </SectionTitle>
        <SectionText>
          I am a highly motivated web designer and software developer with over 3 years of experience. i have great interest in artificial intelligence and i'm always open to learning new things and improving on my skills 
        </SectionText>
        <Button onClick={props.handleClick}>Contact Me</Button>
      </LeftSection>
      <Image src="/images/mee.jpg"></Image>
    </Section>
  </>
);

export default Hero;
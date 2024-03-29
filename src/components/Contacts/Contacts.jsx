import { BsMailbox, BsTelephone, BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  ContactsSection,
  TechSkillList,
  SoftSkillList,
  TechSkillTitle,
  SoftSkillTitle,
  ContactTitle,
  ContactsLink,
  ContactsList,
  ContactsListItem,
  SocialList,
  SocialListItem,
  SocialLink,
} from './Contacts.styled';

import { Photo } from '../Photo/Photo';
import Avatar from '../Photo/my-profile-photo.jpg';

export const Contacts = () => {
  return (
    <ContactsSection>
      <Photo src={Avatar} alt="my photo" />
      <ContactTitle>Contacts</ContactTitle>

      <ContactsList>
        <ContactsListItem>
          <BsMailbox size="1.5em" />
          <ContactsLink href="kaizermaksym@gmail.com">
            kaizermaksym@gmail.com
          </ContactsLink>
        </ContactsListItem>
        <ContactsListItem>
          <BsTelephone size="1.5em" />
          <ContactsLink href="tel:+380983686989">
            +38 098 368 69 89
          </ContactsLink>
        </ContactsListItem>
      </ContactsList>
      <SocialList>
        <SocialListItem>
          <SocialLink href="https://github.com/Kaizer-Maksym" target="_blank">
            <BsGithub size="2.2em" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink
            href="https://www.linkedin.com/in/maksym-kaizer/"
            target="_blank"
          >
            <BsLinkedin size="2.2em" />
          </SocialLink>
        </SocialListItem>
      </SocialList>
      <TechSkillTitle>Tech Skills</TechSkillTitle>
      <TechSkillList>
        <li> HTML5/CSS3/SASS</li>
        <li>Responsive/Adaptive design</li>
        <li>GIT</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Webpack</li>
        <li>Parcel</li>
      </TechSkillList>
      <SoftSkillTitle>Soft Skills</SoftSkillTitle>
      <SoftSkillList>
        <li>Growth Mindset</li>
        <li>Teamwork</li>
        <li>Good communication</li>
        <li>Agile</li>
        <li>Attentive</li>
        <li>Autonomous</li>
        <li>Conscientious</li>
        <li>Eager to learn</li>
      </SoftSkillList>
      <TechSkillTitle>Language skills</TechSkillTitle>
      <TechSkillList>
        <li> Ukrainian - Native</li>
        <li>English - Intermediate</li>
      </TechSkillList>
    </ContactsSection>
  );
};

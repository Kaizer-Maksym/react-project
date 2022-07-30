import {
  SummaryText,
  Name,
  InfoSection,
  Stack,
  InfoTitle,
  ProjectLink,
  ProjectList,
  WorkTitle,
  Duration,
  Facility,
  WorkList,
  ProjectDescription,
} from './PersonalInfo.styled';

import { BsCodeSlash } from 'react-icons/bs';

export const Information = () => {
  return (
    <InfoSection>
      <Name>Maksym Kaizer</Name>
      <Stack>Junior front-end developer</Stack>
      <InfoTitle>Summary</InfoTitle>
      <SummaryText>
        I am a beginning JavaScript programmer. I am studying on the online
        courses: Full-stack JavaScript developer. I am well-versed in the
        language, daily engaged in the development and study of new frameworks,
        the capabilities of the language. I can work as an independent unit in a
        team. I know a lot, that I do not know - I will find, that I will not
        find - I will ask my colleagues correctly. I know how to work in a team
        and I really want to develop professionally. <br /> I am looking for a
        job or an internship to start a career in IT.
      </SummaryText>
      <InfoTitle>Project experience</InfoTitle>
      <ProjectList>
        <li>
          <ProjectLink
            href="https://kaizer-maksym.github.io/goit-markup-hw-08/"
            target="_blank"
          >
            WebStudio......
          </ProjectLink>
          <ProjectLink
            href="https://github.com/Kaizer-Maksym/goit-markup-hw-08"
            target="_blank"
          >
            <BsCodeSlash size="1.2em" />
          </ProjectLink>
          <ProjectDescription>
            <b> [ HTML, SASS, JS, Parcel ]</b> A website with a responsive
            layout.
          </ProjectDescription>
        </li>

        <li>
          <ProjectLink
            href="https://kaizer-maksym.github.io/icecream/"
            target="_blank"
          >
            IceCream......
          </ProjectLink>
          <ProjectLink
            href="https://github.com/Kaizer-Maksym/icecream"
            target="_blank"
          >
            <BsCodeSlash size="1.2em" />
          </ProjectLink>
          <ProjectDescription>
            <b> [ HTML, SASS, JS, Parcel ]</b> Ice Cream company site. Neat and
            tasty design, responsible layout. Role: Developer.
          </ProjectDescription>
        </li>
        <li>
          <ProjectLink
            href="https://kaizer-maksym.github.io/filmoteka/"
            target="_blank"
          >
            Filmoteka......
          </ProjectLink>
          <ProjectLink
            href="https://github.com/Kaizer-Maksym/filmoteka"
            target="_blank"
          >
            <BsCodeSlash size="1.2em" />
          </ProjectLink>
          <ProjectDescription>
            <b> [ HTML, SASS, JS, REST API, AJAX, Parcel, AXIOS, Notiflix]</b>{' '}
            Application for choosing a movie. Role: Developer.
          </ProjectDescription>
        </li>
      </ProjectList>
      <InfoTitle>Work expereince</InfoTitle>

      <WorkTitle>Work abroad </WorkTitle>
      <WorkList>installation of ventilation systems</WorkList>
      <Duration>2017</Duration>

      <WorkTitle>Service in the patrol police</WorkTitle>
      <Duration>2016 - 2017</Duration>

      <WorkTitle>Lawyer in construction company</WorkTitle>
      <Duration>2015-2016</Duration>
      <WorkList>
        <li>Preparation of contracts and procedural documents</li>
        <li>Analysis of the current legislation</li>
        <li>
          Preparation for participation in the procedure of public procurement
          in the sphere of construction
        </li>
      </WorkList>

      <InfoTitle>Education</InfoTitle>
      <Facility>
        Kyiv University of Law Of the National Academy of Sciences of Ukraine
      </Facility>

      <Duration>Science of law | September 2003 - June 2008 (KYIV)</Duration>

      <InfoTitle>Additional education</InfoTitle>
      <Facility>IT School GoIT (online-courses)</Facility>
      <Duration>Full Stack JavaScript Developer | November 2021</Duration>
    </InfoSection>
  );
};

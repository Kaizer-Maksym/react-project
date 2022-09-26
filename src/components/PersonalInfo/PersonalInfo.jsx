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

export const Information = () => {
  return (
    <InfoSection>
      <Name>Maksym Kaizer</Name>
      <Stack>Junior JavaScript Developer</Stack>
      <InfoTitle>Summary</InfoTitle>
      <SummaryText>
        I am a beginning JavaScript programmer. I am studying on the online
        courses: Full-stack JavaScript developer. I am well-versed in the
        JavaScript, daily engaged in the development and study of new
        frameworks. I can work both in a team and independently. If I do not
        know something - I will google it, if it doestn`t help - I will ask my
        colleagues for a help. <br /> I am looking for a job or an internship to
        start a career in IT.
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
            <b> Git</b>
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
            <b> Git</b>
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
            <b> Git</b>
          </ProjectLink>
          <ProjectDescription>
            <b> [ HTML, SASS, JS, REST API, AJAX, Parcel, AXIOS, Notiflix]</b>
            Application for choosing a movie. Role: Developer.
          </ProjectDescription>
        </li>
      </ProjectList>
      <InfoTitle>Work expereince</InfoTitle>

      <WorkTitle>Work abroad </WorkTitle>
      <WorkList>installation of ventilation systems</WorkList>
      <Duration>2017 - present</Duration>

      <WorkTitle>Service in the patrol police</WorkTitle>
      <Duration>2016 - 2017</Duration>

      <WorkTitle>Lawyer in construction company</WorkTitle>
      <Duration>2015 - 2016</Duration>
      <WorkList>
        <li>Preparation of contracts and procedural documents</li>
        <li>Analysis of the current legislation</li>
        <li>
          Preparation for participation in the procedure of public procurement
          in the sphere of construction
        </li>
      </WorkList>

      <InfoTitle>Education</InfoTitle>

      <Facility>IT School GoIT (online-courses)</Facility>
      <Duration>
        Full Stack JavaScript Developer <b>|</b> November 2021 - present
      </Duration>
      <Facility>
        Kyiv University of Law Of the National Academy of Sciences of Ukraine
      </Facility>

      <Duration>
        Science of law <b>|</b> September 2003 - June 2008 (KYIV)
      </Duration>
    </InfoSection>
  );
};

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
      <Stack>Junior front-end developer</Stack>
      <InfoTitle>Summary</InfoTitle>
      <SummaryText>
        I am a Junior Front-End developer. user-friendly. I have knowledge of
        HTML, CSS, JavaScript, and React. Looking for a job. Development,
        practice and work for the result are important for me. I intend to
        develop innovative technologies and deliver value to people. Also, I
        have hands-on experience in following Agile /Scrum methodology when
        working in a team. I am a fast learner, responsible, and ready for
        challenging tasks.
      </SummaryText>
      <InfoTitle>Project experience</InfoTitle>
      <ProjectList>
        <li>
          <ProjectLink href="https://kaizer-maksym.github.io/goit-markup-hw-08/">
            WebStudio -
          </ProjectLink>
          <ProjectDescription>
            <b> [ HTML, SASS, JS, Parcel ]</b> A website with a responsive
            layout.
          </ProjectDescription>
        </li>

        <li>
          <ProjectLink href="https://kaizer-maksym.github.io/icecream/">
            IceCream -
          </ProjectLink>
          <ProjectDescription>
            <b> [ HTML, SASS, JS, Parcel ]</b> Ice Cream company site. Neat and
            tasty design, responsible layout. Role: Developer.
          </ProjectDescription>
        </li>
        <li>
          <ProjectLink href="https://kaizer-maksym.github.io/filmoteka/">
            Filmoteka -
          </ProjectLink>
          <ProjectDescription>
            <b> [ HTML, SASS, JS, REST API, AJAX, Parcel, AXIOS, Notiflix]</b>{' '}
            Application for choosing a movie. Role: Developer.
          </ProjectDescription>
        </li>
      </ProjectList>
      <InfoTitle>Work expereince</InfoTitle>

      <WorkTitle>Service in the patrol police</WorkTitle>
      <Duration>2016 - 2017</Duration>
      <ul></ul>
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
      <WorkTitle>Lawyer in the land inspection</WorkTitle>
      <Duration>2014-2015</Duration>
      <WorkList>
        <li>Analysis of land legislation</li>
        <li>Preparation of draft documents</li>
        <li>Processing of applications of citizens</li>
      </WorkList>
      <WorkTitle>Private legal practice</WorkTitle>
      <Duration>2008-2014</Duration>
      <WorkList>
        <li>Preparation of process documents</li>
        <li>Preparation and conclusion of agreements</li>
        <li>Participation in court proceedings</li>
        <li>Work with pre-trial investigation bodies</li>
        <li>Analysis of legislation</li>
      </WorkList>

      <InfoTitle>Education</InfoTitle>
      <Facility>
        Kyiv University of Law Of the National Academy of Sciences of Ukraine
      </Facility>
      <p></p>
      <Duration>Science of law | September 2003 - June 2008 (KYIV)</Duration>

      <InfoTitle>Additional education</InfoTitle>
      <Facility>IT School GoIT (online-courses)</Facility>
      <Duration>Full Stack JavaScript Developer | November 2021</Duration>
      <p></p>
    </InfoSection>
  );
};

import styled from '@emotion/styled';

export const InfoSection = styled.section`
  width: 600px;
  padding: 20px;
`;

export const Name = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 40px;
`;

export const SummaryText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #00000098;
  margin-bottom: 10px;
`;

export const Stack = styled.h3`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const InfoTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;

  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  color: #2213c8;
  text-decoration: underline;
  :hover,
  :focus {
    color: #a64421c5;
  }
`;

export const ProjectList = styled.ul`
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #00000098;
`;

export const WorkTitle = styled.h3`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;

  text-transform: uppercase;
  margin-bottom: 10px;
  color: #141211;
`;

export const Duration = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: #00000098;

  margin-bottom: 10px;
`;

export const Facility = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  color: #fb6d3a;
`;

export const WorkList = styled.ul`
  list-style: inside;
  font-weight: 500;
  font-size: 14px;
  color: #00000098;
  margin-bottom: 10px;
`;

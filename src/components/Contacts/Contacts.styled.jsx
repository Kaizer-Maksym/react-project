import styled from '@emotion/styled';

export const ContactsSection = styled.section`
  padding: 25px;
  width: 250px;
  background-color: #1e2939f1;
`;
export const ContactTitle = styled.h2`
  color: #ef784dc5;

  margin-bottom: 15px;
`;
export const ContactsList = styled.ul`
  color: rgba(256, 256, 256, 0.5);
  font-size: 14px;

  margin-bottom: 15px;
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactsLink = styled.a`
  color: rgba(256, 256, 256, 0.5);
  text-decoration: none;
  :nth-child(2) {
    margin-left: 10px;
  }

  :hover,
  :focus {
    color: #ef784dc5;
  }
`;

export const SocialList = styled.ul`
  color: rgba(256, 256, 256, 0.5);
  font-size: 14px;

  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SocialLink = styled.a`
  color: rgba(256, 256, 256, 0.5);

  :hover,
  :focus {
    color: #ef784dc5;
  }
`;

export const TechSkillList = styled.ul`
  color: #ffffff;

  list-style: inside;
  margin-bottom: 15px;
  font-size: 14px;
`;

export const TechSkillTitle = styled.h2`
  color: #ef784dc5;

  margin-bottom: 15px;
`;

export const SoftSkillList = styled.ul`
  color: #ffffff;

  list-style: inside;
`;

export const SoftSkillTitle = styled.h2`
  color: #ef784dc5;

  margin-bottom: 15px;
`;

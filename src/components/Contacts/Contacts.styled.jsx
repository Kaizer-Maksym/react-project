import styled from '@emotion/styled';

export const ContactsSection = styled.section`
  padding: 60px 40px;
  width: 360px;
  background-color: #1e2939f1;
`;
export const ContactTitle = styled.h2`
  color: #ef784dc5;

  margin-bottom: 20px;
`;
export const ContactsList = styled.ul`
  color: rgba(256, 256, 256, 0.5);
  font-size: 16px;

  margin-bottom: 20px;
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ContactsLink = styled.a`
  color: rgba(256, 256, 256, 0.5);
  text-decoration: none;
  :nth-child(2) {
    margin-left: 15px;
  }

  :hover,
  :focus {
    color: #ef784dc5;
  }
`;

export const SocialList = styled.ul`
  width: 200px;
  color: rgba(256, 256, 256, 0.5);
  font-size: 16px;

  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialListItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
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
  font-size: 16px;
  list-style: inside;
  margin-bottom: 20px;
`;

export const TechSkillTitle = styled.h2`
  color: #ef784dc5;

  margin-bottom: 20px;
`;

export const SoftSkillList = styled.ul`
  color: #ffffff;
  font-size: 16px;
  list-style: inside;
  margin-bottom: 20px;
`;

export const SoftSkillTitle = styled.h2`
  color: #ef784dc5;

  margin-bottom: 20px;
`;

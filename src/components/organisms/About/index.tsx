import { AboutItem } from 'src/components/molecules';
import styled from 'styled-components';

const AboutContainer = styled.article`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

const AboutMyData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const aboutCategory = [
  {
    icon: 'user.png',
    about: '이름',
    data: '백승일'
  },
  {
    icon: 'calender.png',
    about: '생년월일',
    data: '1995-10-12'
  },
  {
    icon: 'location.png',
    about: '주소',
    data: '경기도 하남시'
  },
  {
    icon: 'phone.png',
    about: '연락처',
    data: '010-2931-6290'
  },
  {
    icon: 'mail.png',
    about: '이메일',
    data: 'bigcoms6290@gmail.com'
  },
  {
    icon: 'pencil.png',
    about: '최종 학력',
    data: '명지대 철학과'
  }
];

export const About = () => {
  return (
    <AboutContainer>
      <h2>ABOUT ME</h2>
      <AboutMyData>
        {aboutCategory.map((data, key) => (
          <AboutItem aboutCategory={data} key={key} />
        ))}
      </AboutMyData>
    </AboutContainer>
  );
};

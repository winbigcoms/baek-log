import { useStore } from 'src/store';

import styled from 'styled-components';

interface AboutItemProp {
  aboutCategory: { icon: string; about: string; data: string };
}

const AboutItemElement = styled.div`
  display: flex;
  width: 300px;

  margin-bottom: 20px;

  align-items: center;

  img {
    max-width: 100px;
    width: 15vw;
  }

  & > div {
    margin-left: 15px;
    line-height: 30px;
  }
`;

export const AboutItem = (props: AboutItemProp) => {
  const { aboutCategory } = props;

  return (
    <AboutItemElement>
      <img
        alt={aboutCategory.icon}
        src={`/assets/img/${true ? 'dark-' : ''}${aboutCategory.icon}`}
      ></img>
      <div>
        {aboutCategory.about} <br />
        {aboutCategory.data}
      </div>
    </AboutItemElement>
  );
};

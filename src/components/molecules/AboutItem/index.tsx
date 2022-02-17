import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import styled from 'styled-components';

import { StyleStore } from 'src/store/style';

interface AboutItemProp {
  aboutCategory: { icon: string; about: string; data: string };
  style: StyleStore;
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

const AboutItemComponent = (props: AboutItemProp) => {
  const { aboutCategory, style } = props;

  const { darkMode } = style;

  return (
    <AboutItemElement>
      <img src={`/assets/img/${darkMode ? 'dark-' : ''}${aboutCategory.icon}`}></img>
      <div>
        {aboutCategory.about} <br />
        {aboutCategory.data}
      </div>
    </AboutItemElement>
  );
};

export const AboutItem = inject('style')(observer(AboutItemComponent));

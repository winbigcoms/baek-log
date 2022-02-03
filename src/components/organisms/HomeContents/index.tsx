import { inject, observer } from 'mobx-react';

import styled from 'styled-components';

import { StyleStore } from 'src/store/style';
import { CategoryBox } from '..';

const HomeContentsContainer = styled.main<{ darkMode: boolean }>`
  max-width: 1024px;
  min-width: 800px;
  margin: auto;
  padding: 30px 0px;

  & > div {
    margin-bottom: 15px;
  }

  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};
  transition: background-color 400ms linear, color 400ms linear;
`;

interface HomeContentsProps {
  contents: CategoryItem[];
  style: StyleStore;
}

const HomeContentsComponent = (props: HomeContentsProps) => {
  const { contents, style } = props;

  const { darkMode } = style;

  return (
    <HomeContentsContainer darkMode={darkMode}>
      {contents.map((data, idx) => (
        <CategoryBox
          key={idx}
          categoryTitle={data.categoryTitle}
          categoryContents={data.categoryContents}
          index={idx}
          route={data.route}
        />
      ))}
    </HomeContentsContainer>
  );
};

export const HomeContents = inject('style')(observer(HomeContentsComponent));

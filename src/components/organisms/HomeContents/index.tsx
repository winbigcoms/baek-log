import { CategoryItem } from 'src/model';
import styled from 'styled-components';

import { CategoryBox } from '..';

const HomeContentsContainer = styled.main<{ darkMode: boolean }>`
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
}

export const HomeContents = (props: HomeContentsProps) => {
  const { contents } = props;

  return (
    <HomeContentsContainer darkMode={true}>
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

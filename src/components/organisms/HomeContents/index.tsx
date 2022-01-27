import styled from 'styled-components';
import { CategoryBox } from '..';

const HomeContentsContainer = styled.main`
  max-width: 1024px;
  min-width: 800px;
  margin: auto;

  & > div {
    margin-bottom: 15px;
  }
`;

interface HomeContentsProps {
  contents: CategoryItem[];
}

export const HomeContents = (props: HomeContentsProps) => {
  const { contents } = props;

  return (
    <HomeContentsContainer>
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

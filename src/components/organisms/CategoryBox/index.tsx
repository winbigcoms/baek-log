import { useRouter } from 'next/router';

import styled from 'styled-components';

import { CategoryText, MoreButton } from 'src/components/atoms';
import { ImageBox } from 'src/components/molecules';

const CategoryBoxElement = styled.article`
  max-width: 1024px;
  min-width: 800px;
  height: 250px;
  padding: 20px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #000;

  &: last-child {
    border: none;
  }
`;

const CategoryBoxHeaderElement = styled.header<{ index: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.index ? 'row-reverse' : 'row')};
`;

const CategoryBoxContentElement = styled.div`
  display: flex;

  & > div {
    margin-right: 35px;
  }
`;

interface CategoryBoxProps extends CategoryItem {
  index: number;
  zigzag: boolean;
}

export const CategoryBox = (props: CategoryBoxProps) => {
  const { categoryTitle, categoryContents, index, route, zigzag = true } = props;

  const router = useRouter();

  const onClickMore = (route: string) => {
    router.push(route);
  };

  return (
    <CategoryBoxElement>
      <CategoryBoxHeaderElement index={zigzag ? Boolean(index % 2) : zigzag}>
        <CategoryText>{categoryTitle}</CategoryText>
        <MoreButton onClick={() => onClickMore('category/' + route)} />
      </CategoryBoxHeaderElement>
      <CategoryBoxContentElement>
        {categoryContents.map((data, idx) => (
          <ImageBox key={idx} title={data.thumbnailTitle} imgUrl={data.imgUrl} />
        ))}
      </CategoryBoxContentElement>
    </CategoryBoxElement>
  );
};

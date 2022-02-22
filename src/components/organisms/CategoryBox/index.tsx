import { useRouter } from 'next/router';

import styled from 'styled-components';

import { CategoryText, MoreButton } from 'src/components/atoms';
import { ImageBox } from 'src/components/molecules';
import { useState } from 'react';

const CategoryBoxElement = styled.section`
  max-width: 1024px;

  margin: auto;
  height: 250px;

  padding: 20px 15px 15px;
  border-bottom: 1px solid #000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;

  &: last-child {
    border: none;
  }
`;

const CategoryBoxHeaderElement = styled.header<{ index: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.index ? 'row-reverse' : 'row')};
`;

const CategoryBoxContentElement = styled.div<{ itemLength: number; swipe: boolean }>`
  overflow: hidden;
  position: relative;
  
  & > div {
    transform:translateX(${props => (props.swipe ? '-245px' : '0px')});
    display: flex;
    width: ${props => props.itemLength * 235}px;
    position: relative;

    transition: transform 0.5s;
  }

  & > button {
    position absolute;
    cursor:pointer;

    left: 1%;
    top: 50%;

    width: 60px;
    height: 60px;
    border-radius: 30px;

    font-size: 18px;

    border:none;
    background-color: rgba(0,0,0,0.1);

    transform: translateY(-50%);
    z-index:500;

    display: ${props => (props.itemLength < 5 || !props.swipe ? 'none' : 'block')};
    
    &:hover{
      background-color: ${props => (props.swipe ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)')};
    }

    &: nth-child(3){
      left:93%;
      display: ${props => (props.itemLength < 5 || props.swipe ? 'none' : 'block')};

      &:hover{
        background-color: ${props => (!props.swipe ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)')};
      }
    }

    transition: background 0.3s;
  }

  & > div > article {
    margin-right: 35px;
  }

  @media (max-width: 800px) {
    & > button {
      &: nth-child(3){
        left: 83%;
        display: ${props => (props.itemLength < 5 || props.swipe ? 'none' : 'block')};
      }
    }
  }
`;

interface CategoryBoxProps extends CategoryItem {
  index: number;
  zigzag?: boolean;
}

export const CategoryBox = (props: CategoryBoxProps) => {
  const { categoryTitle, categoryContents, index, route, zigzag = true } = props;

  const [swipe, setSwipe] = useState(false);
  const router = useRouter();

  const onClickMore = (route: string) => {
    router.push(route);
  };

  const onSwipe = (state: boolean) => {
    setSwipe(state);
  };

  return (
    <CategoryBoxElement>
      <CategoryBoxHeaderElement index={zigzag ? Boolean(index % 2) : zigzag}>
        <CategoryText>{categoryTitle}</CategoryText>
        <MoreButton onClick={() => onClickMore('category/' + route)} />
      </CategoryBoxHeaderElement>
      <CategoryBoxContentElement swipe={swipe} itemLength={categoryContents.length}>
        <button disabled={!swipe} onClick={() => onSwipe(false)}>
          {'<'}
        </button>
        <div>
          {categoryContents.map((data, idx) => (
            <article key={idx}>
              <ImageBox title={data.thumbnailTitle} imgUrl={data.imgUrl} alt='콘텐츠 썸네일' />
            </article>
          ))}
        </div>
        <button disabled={swipe} onClick={() => onSwipe(true)}>
          {'>'}
        </button>
      </CategoryBoxContentElement>
    </CategoryBoxElement>
  );
};

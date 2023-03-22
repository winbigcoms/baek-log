import Head from 'next/head';
import { useRouter } from 'next/router';

import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import { CategoryMiddleText } from 'src/components/atoms';

import { CategoryHiddenModal } from 'src/components/templates';
import { categoryMiddelTitleToKorean } from 'src/const';

import { useModal } from 'src/Hooks';
import { checkCategoryHiddenCommand } from 'src/utills';

const CategoryMain = styled.main<{ darkMode: boolean }>`
  min-height: calc(100vh - 230px);
  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};
  transition: background-color 400ms linear, color 400ms linear;

  padding: 10px;

  @media (max-width: 800px) {
    & > p {
      font-size: 3.5vw;
    }
  }
`;

const CategoryComponent = () => {
  const command = useRef<string[]>([]);

  const router = useRouter();

  const { ModalComponent, modalState, switchModalState } = useModal({
    Contents: CategoryHiddenModal
  });

  const { category } = router.query;

  const checkCategory = categoryMiddelTitleToKorean(category as string);

  useEffect(() => {
    if (router.query.category) {
      if (!Boolean(categoryMiddelTitleToKorean(router.query.category as string))) {
        router.push('/404');
      }
    }

    const hiddenCommand = (e: KeyboardEvent) => {
      command.current.push(e.code);
      const isHiddenCommand = checkCategoryHiddenCommand(command.current);

      if (isHiddenCommand === undefined) return; // 커맨드는 맞지만 다 누르지않음

      if (modalState !== isHiddenCommand) {
        switchModalState(isHiddenCommand);
      }

      if (isHiddenCommand || isHiddenCommand === false) {
        command.current = [];
      }
    };

    window.addEventListener('keydown', hiddenCommand);

    return () => {
      window.removeEventListener('keydown', hiddenCommand);
    };
  }, [checkCategory]);

  return (
    <>
      <Head>
        <title>Baek log</title>
        <meta name='description' content='웹 개발자 백승일의 개발자 블로그' />
      </Head>
      <CategoryMain darkMode={true}>
        <CategoryMiddleText text={checkCategory} />
      </CategoryMain>
      {modalState && ModalComponent}
    </>
  );
};

export default CategoryComponent;

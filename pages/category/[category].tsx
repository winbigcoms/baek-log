import Head from 'next/head';
import { useRouter } from 'next/router';

import { useEffect, useRef } from 'react';
import { CategoryMiddleText } from 'src/components/atoms';

import { CategoryHiddenModal } from 'src/components/templates';
import { categoryMiddelTitleToKorean } from 'src/const';

import { useModal } from 'src/Hooks';
import { checkCategoryHiddenCommand } from 'src/utills';

const Category = () => {
  const command = useRef<string[]>([]);

  const router = useRouter();

  const { ModalComponent, modalState, switchModalState } = useModal({
    Contents: CategoryHiddenModal
  });

  const { category } = router.query;

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Head>
        <title>Baek log</title>
        <meta name='description' content='웹 개발자 백승일의 개발자 블로그' />
      </Head>
      <CategoryMiddleText text={categoryMiddelTitleToKorean(category as string)} />
      {modalState && ModalComponent}
    </>
  );
};

export default Category;

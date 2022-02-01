import type { NextPage } from 'next';
import Head from 'next/head';

import { useEffect, useRef } from 'react';

import { checkHomeHiddenCommand } from 'src/utills';
import { useModal } from 'src/Hooks';

import { HomeHiddenModal, HomeTmp } from 'src/components/templates';

const Home: NextPage = () => {
  const command = useRef<string[]>([]);
  const { ModalComponent, modalState, switchModalState } = useModal({ Contents: HomeHiddenModal });

  useEffect(() => {
    const hiddenCommand = (e: KeyboardEvent) => {
      command.current.push(e.code);

      const isHiddenCommand = checkHomeHiddenCommand(command.current);

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
      <HomeTmp />
      {modalState && ModalComponent}
    </>
  );
};

export default Home;

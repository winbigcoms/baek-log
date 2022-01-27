import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import { HomeTmp } from 'src/components/templates';
import { checkHiddenCommand } from 'src/const';

const Home: NextPage = () => {
  const command = useRef([]);
  const [showHidden, setHidden] = useState(false);

  useEffect(() => {
    const hiddenCommand = (e: KeyboardEvent) => {
      command.current.push(e.code);
      const isHiddenCommand = checkHiddenCommand(command.current);

      if (isHiddenCommand === undefined) return; // 커맨드는 맞지만 다 누르지않음

      if (showHidden !== isHiddenCommand) {
        setHidden(isHiddenCommand);
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
      {showHidden && <div>히든 퀘 성공!</div>}
    </>
  );
};

export default Home;

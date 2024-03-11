'use client';
import type { NextPage } from 'next';

import { useModal } from 'src/Hooks';

import { HomeHiddenModal, HomeTmp } from 'src/components/templates';

const Home: NextPage = () => {
  const { ModalComponent, modalState } = useModal({ Contents: HomeHiddenModal });

  return (
    <>
      <HomeTmp />
      {modalState && ModalComponent}
    </>
  );
};

export default Home;

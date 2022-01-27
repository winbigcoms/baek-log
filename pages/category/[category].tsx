import Head from 'next/head';
import { useRouter } from 'next/router';

import { categoryToKorean } from 'src/const';

const Category = () => {
  const router = useRouter();

  const { category } = router.query;

  return (
    <>
      <Head>
        <title>Baek log</title>
        <meta name='description' content='웹 개발자 백승일의 개발자 블로그' />
      </Head>
    </>
  );
};

export default Category;

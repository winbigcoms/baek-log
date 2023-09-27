'use client';
import Head from 'next/head';
import styled from 'styled-components';
import HTMLFlipBook from 'react-pageflip';

const OneYearContainer = styled.div`
  width: 100%;

  .header {
    display: flex;
    justify-content: center;
  }
`;

const OneYearEvent = () => {
  return (
    <>
      <Head>
        <title>Event</title>
      </Head>
      <OneYearContainer>
        <div className='header' data-aos='fade-up'>
          <span>경</span>
          1주년
          <span>축</span>
        </div>

        <HTMLFlipBook
          width={300}
          height={400}
          showCover={true}
          className={''}
          style={{}}
          startPage={0}
          size={'fixed'}
          minWidth={0}
          maxWidth={0}
          minHeight={0}
          maxHeight={0}
          drawShadow={false}
          flippingTime={0}
          usePortrait={false}
          startZIndex={0}
          autoSize={false}
          maxShadowOpacity={0}
          mobileScrollSupport={false}
          clickEventForward={false}
          useMouseEvents={false}
          swipeDistance={0}
          showPageCorners={false}
          disableFlipByClick={false}
        >
          <div className='pave-cover demoPage demoPage1'>Page 1</div>
          <div className='demoPage demoPage1'>Page 1</div>
          <div className='demoPage demoPage2'>Page 2</div>
          <div className='demoPage demoPage3'>Page 3</div>
          <div className='demoPage demoPage4'>Page 4</div>
        </HTMLFlipBook>
      </OneYearContainer>
    </>
  );
};

export default OneYearEvent;

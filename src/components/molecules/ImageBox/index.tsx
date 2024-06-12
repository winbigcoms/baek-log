'use client';
import Image from 'next/image';
import styled from 'styled-components';

const ImageBoxElement = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
  border: 1px solid pink;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbnailText = styled.p`
  position: absolute;
  max-width: 120px;
  left: 5px;
  bottom: 5px;
  font-size: 14px;
  background-color: #fff !important;
  color: #000 !important;
  margin: 0px;
`;

const NoImgBox = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  cursor: pointer;
`;

interface ImageBoxProps {
  title?: string;
  imgUrl?: string;
  useBGColor?: boolean;
}

export const ImageBox = (props: ImageBoxProps) => {
  const { title, imgUrl, useBGColor = false } = props;

  return (
    <ImageBoxElement
      style={{
        backgroundColor: useBGColor ? '#fff' : 'inherit'
      }}
    >
      <div style={{ position: 'relative', height: '100%' }}>
        {imgUrl ? (
          <Image src={imgUrl} priority alt='업로드 된 이미지' fill />
        ) : (
          <NoImgBox>이미지를 넣어주세요</NoImgBox>
        )}
      </div>
      {Boolean(title) && <ThumbnailText>{title}</ThumbnailText>}
    </ImageBoxElement>
  );
};

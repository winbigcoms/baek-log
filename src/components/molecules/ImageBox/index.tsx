import Image from 'next/image';
import styled from 'styled-components';

const ImageBoxElement = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
  border: 1px solid pink;
`;

const ThumbnailText = styled.p`
  position: absolute;
  max-width: 120px;
  left: 5px;
  bottom: 5px;
  font-size: 14px;
  background-color: #fff;
  margin: 0px;
`;

interface ImageBoxProps {
  title: string;
  imgUrl: string;
}

export const ImageBox = (props: ImageBoxProps) => {
  const { title, imgUrl } = props;
  return (
    <ImageBoxElement>
      <div>
        <Image src={imgUrl} layout='fill' />
      </div>
      <ThumbnailText>{title}</ThumbnailText>
    </ImageBoxElement>
  );
};

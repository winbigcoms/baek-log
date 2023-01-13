import styled from 'styled-components';

const StickyBoxEle = styled.div<{ stickyStyle: { [x: string]: number } }>`
  z-index: 10;
  position: sticky;
  display: flex;
  justify-content: center;
`;

interface StickyBoxProps {
  children?: React.ReactNode;
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
  verticalFigure: number;
  horizontalFigure: number;
}

export const StickyBox: React.FC<StickyBoxProps> = props => {
  const { children, vertical, horizontal, verticalFigure, horizontalFigure } = props;

  const stickyStyle = {
    [vertical]: verticalFigure,
    [horizontal]: horizontalFigure
  };

  return <StickyBoxEle stickyStyle={stickyStyle}>({children})</StickyBoxEle>;
};

import styled from 'styled-components';

import { CloseButton } from 'src/components/atoms';

const ModalHeaderElement = styled.div`
  border-bottom: 1px solid #ccc;
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;

  p {
    padding-left: 20px;
    font-size: 22px;
  }
`;

interface ModalHeaderProps {
  onClose: () => void;
  headerTitle: string | JSX.Element;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { onClose, headerTitle } = props;

  return (
    <ModalHeaderElement>
      <p>{headerTitle}</p>
      <CloseButton onClose={onClose} />
    </ModalHeaderElement>
  );
};

import styled from 'styled-components';

import { ModalContainer } from 'src/components/atoms';
import { ModalHeader } from 'src/components/molecules';

const ModalContentBox = styled.div`
  padding: 20px;
`;

interface HomeHiddenModalProps {
  switchModalState: (state: boolean) => void;
}

export const HomeHiddenModal = (props: HomeHiddenModalProps) => {
  const { switchModalState } = props;

  const closeModal = () => {
    switchModalState(false);
  };

  return (
    <ModalContainer>
      <ModalHeader onClose={closeModal} headerTitle='홈 히든 모달' />
      <ModalContentBox>히든퀘스트!</ModalContentBox>
    </ModalContainer>
  );
};

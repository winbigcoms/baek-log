import { useRouter } from 'next/router';
import { ModalContainer } from 'src/components/atoms';
import { ModalHeader } from 'src/components/molecules';

interface CategoryHiddenModalProps {
  switchModalState: (state: boolean) => void;
}

export const CategoryHiddenModal = (props: CategoryHiddenModalProps) => {
  const { switchModalState } = props;

  const router = useRouter();
  const { category } = router.query;

  const closeModal = () => {
    switchModalState(false);
  };

  return (
    <ModalContainer>
      <ModalHeader onClose={closeModal} headerTitle={`${category} 히든 모달`} />
    </ModalContainer>
  );
};

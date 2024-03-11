import { useEffect, useRef } from 'react';
import { useModal } from '../useModal';
import { checkHomeHiddenCommand } from 'src/utills';

export const useCommand = (
  modalEle: (props: { switchModalState: (state: boolean) => void }) => JSX.Element
) => {
  const command = useRef<string[]>([]);
  const { modalState, switchModalState } = useModal({ Contents: modalEle });
  useEffect(() => {
    const hiddenCommand = (e: KeyboardEvent) => {
      command.current.push(e.code);

      const isHiddenCommand = checkHomeHiddenCommand(command.current);

      if (isHiddenCommand === undefined) return; // 커맨드는 맞지만 다 누르지않음

      if (modalState !== isHiddenCommand) {
        switchModalState(isHiddenCommand);
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
  return;
};

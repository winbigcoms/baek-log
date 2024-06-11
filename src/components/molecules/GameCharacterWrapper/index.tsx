import { ReactNode, Suspense } from 'react';

interface GameCharProps {
  gameTitle: string;
  children: ReactNode;
}

export const GameCharacterWrapper = async (props: GameCharProps) => {
  const { gameTitle, children } = props;

  return (
    <div>
      <h2>{gameTitle}</h2>
      <Suspense fallback={'loading'}>{children}</Suspense>
    </div>
  );
};

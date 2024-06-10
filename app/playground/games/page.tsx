'use client';
import { Suspense } from 'react';
import { GameChar } from 'src/components/organisms';

export default async function GamePage() {
  return (
    <div>
      <Suspense fallback={'loading'}>
        <GameChar />
      </Suspense>
    </div>
  );
}

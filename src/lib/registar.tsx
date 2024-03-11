'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useStyledComponentsRegistry } from './styled-components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);
  useEffect(() => {
    AOS.init();
  }, []);
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

'use client';

import { useServerInsertedHTML } from 'next/navigation';
// import { useStyledComponentsRegistry } from './styled-components';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  // const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry();

  // useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);
  useEffect(() => {
    AOS.init();
  }, []);

  // return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
  );
}

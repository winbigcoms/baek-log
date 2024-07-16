'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

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

'use client';
import { useEffect, useRef, useState } from 'react';

interface FaillingData {
  x: number; // x좌표
  y: number; // y좌표
  speedOfFall: number; // 낙하 속도
} //정보

const makeDefaultFaillingData = (count: number = 10) => {
  const datas: FaillingData[] = [];
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  for (let i = 0; i < count; i++) {
    const data = {
      x: Math.floor(Math.random() * innerWidth - 10),
      y: Math.floor(Math.random() * innerHeight),
      speedOfFall: Math.random() / 2 + 0.1
    };
    datas.push(data);
  }

  return datas;
};

const failling = (faillingData: FaillingData[]) =>
  faillingData.map(data => {
    let x = data.x + Math.cos(data.y / 30);
    let y = data.y + data.speedOfFall;

    const innerHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

    if (y >= innerHeight - 60) {
      y = 0;
      x = Math.floor(Math.random() * innerWidth);
    }
    if (x > innerWidth - 50) {
      x = innerWidth - 50;
    } else if (x < 0) {
      x = 50;
    }
    return { x, y, speedOfFall: data.speedOfFall };
  });

export const useFalling = (count: number): FaillingData[] => {
  const [faillingDatas, setFaillingData] = useState<FaillingData[]>([]); //배열
  const fallingAnimationRef = useRef(0);

  const setSnowPosition = () => {
    setFaillingData(state => failling(state));
    requestAnimationFrame(setSnowPosition);
  };

  useEffect(() => {
    setFaillingData(makeDefaultFaillingData(count));
  }, []);

  useEffect(() => {
    fallingAnimationRef.current = requestAnimationFrame(setSnowPosition);

    return () => {
      cancelAnimationFrame(fallingAnimationRef.current);
    };
  }, []);

  return faillingDatas;
};

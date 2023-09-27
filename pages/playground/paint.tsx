import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const PlaygroundPaintStyle = styled.div`
  padding: 100px 0px;

  canvas {
    border: 1px solid #333;
  }
`;

const PlaygroundPaint = () => {
  const [paintingMode, setPaintingMode] = useState<'pencil' | 'eraser'>('pencil');
  const [paintColor, setPaintColor] = useState<string>('#000');
  const [paintSize, setPaintSize] = useState<number>(10);
  const [showPaintSizeDemo, setPaintShowSizeDemo] = useState<boolean>(false);
  const [canvasSize, setCanvasSize] = useState({
    width: 100,
    height: 100
  });
  const [history, setHistory] = useState<{
    data: {
      positions: { x: number; y: number }[];
      mode: typeof paintingMode;
      pencilData: {
        size: number;
        color: string;
      };
    }[];
    cursor: number;
  }>({
    data: [],
    cursor: 0
  });

  const [isPainting, setPaintingState] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const livePaintingHistory = useRef<{ x: number; y: number }[]>([]);

  const getMousePositionOnCavnas = (event: MouseEvent | TouchEvent) => {
    if (!canvasRef.current) return { x: 0, y: 0 };

    const declareEvent = 'clientX' in event ? event : event.touches[0];

    const clientX = declareEvent.clientX;
    const clientY = declareEvent.clientY;

    const { left, top } = canvasRef.current.getBoundingClientRect();

    return { x: clientX - left, y: clientY - top };
  };

  const onHandlePaintingStart = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!context) return;
      e.preventDefault();
      const mousePos = getMousePositionOnCavnas(e); // 마우스 포지션

      context.globalCompositeOperation =
        paintingMode === 'eraser' ? 'destination-out' : 'source-over';

      context.beginPath();
      context.moveTo(mousePos.x, mousePos.y);
      context.lineWidth = paintSize;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = paintColor;

      context.fill();

      setPaintingState(true);

      livePaintingHistory.current = [mousePos];
    },
    [paintingMode, context]
  );

  const onHandlePainting = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!context || !isPainting) return;

      e.preventDefault();

      const mousePosition = getMousePositionOnCavnas(e);
      context.lineTo(mousePosition.x, mousePosition.y);
      livePaintingHistory.current.push(mousePosition);
      context.stroke();
    },
    [context, isPainting]
  );

  const onHandlePaintingEnd = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isPainting) return;
      e.preventDefault();

      const newHistory = [...livePaintingHistory.current];
      setHistory(state => ({
        cursor: state.cursor + 1,
        data: [
          ...state.data.slice(0, state.cursor),
          {
            positions: newHistory,
            mode: paintingMode,
            pencilData: {
              size: paintSize,
              color: paintColor
            }
          }
        ]
      }));
      setPaintingState(false);
      livePaintingHistory.current = [];
    },
    [isPainting]
  );

  const clearCanvas = () => {
    if (canvasRef.current && context) {
      if (history.cursor === 0) return;

      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      setHistory(state => {
        return {
          cursor: 0,
          data: []
        };
      });
    }
  };

  const historyDrawPaint = (movedCursor: number, tpye: 'next' | 'prev') => {
    const { mode, pencilData, positions } = history.data[movedCursor];

    if (!context) return;

    context.globalCompositeOperation =
      mode === (tpye === 'next' ? 'eraser' : 'pencil') ? 'destination-out' : 'source-over';

    context.beginPath();
    context.lineWidth = pencilData.size;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = pencilData.color;

    positions.forEach((position, idx) => {
      if (idx === 0) {
        context.moveTo(position.x, position.y);
        context.fill();
        return;
      }
      context.lineTo(position.x, position.y);
      context.stroke();
    });

    setHistory(state => ({ ...state, cursor: movedCursor + (tpye === 'next' ? 1 : 0) }));
  };

  const onHistoryMovePrev = () => {
    if (history.cursor === 0) return;

    const movedCursor = history.cursor - 1;

    historyDrawPaint(movedCursor, 'prev');
  };

  const onHistoryMoveNext = () => {
    if (history.cursor === history.data.length) return;

    const movedCursor = history.cursor;

    historyDrawPaint(movedCursor, 'next');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const canvas_container = document.getElementById('canvas_container');

      if (canvas_container) {
        const { offsetHeight, offsetWidth } = canvas_container;
        const shortSideSize = Math.min(offsetHeight, offsetWidth, 512);
        setCanvasSize({
          width: shortSideSize,
          height: shortSideSize
        });

        const ctx = canvas.getContext('2d');

        setContext(ctx);
        canvas.addEventListener('touchstart', onHandlePaintingStart, { passive: false });
        canvas.addEventListener('touchmove', onHandlePainting, { passive: false });
        canvas.addEventListener('touchend', onHandlePaintingEnd);
      }
    }
  }, []);

  return (
    <PlaygroundPaintStyle id='canvas_container'>
      <canvas
        className='frame canvas'
        onMouseDown={onHandlePaintingStart}
        onMouseMove={onHandlePainting}
        onMouseLeave={onHandlePaintingEnd}
        onMouseUp={onHandlePaintingEnd}
        ref={canvasRef}
        {...canvasSize}
      />
      <div>
        <button onClick={clearCanvas}>지우기</button>
        <button onClick={onHistoryMovePrev}>뒤로</button>
        <button onClick={onHistoryMoveNext}>앞으로</button>
      </div>
    </PlaygroundPaintStyle>
  );
};
export default PlaygroundPaint;

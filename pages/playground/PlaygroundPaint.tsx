import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

const PlaygroundPaint = () => {
  const [paintingMode, setPaintingMode] = useState<'pencil' | 'eraser'>('pencil');
  const [paintColor, setPaintColor] = useState<string>('#000');
  const [paintSize, setPaintSize] = useState<number>(10);
  const [showPaintSizeDemo, setPaintShowSizeDemo] = useState<boolean>(false);
  const [canvasSize, setCanvasSize] = useState({
    width: 100,
    height: 100
  });

  const [context, setContext] = useState<CanvasRenderingContext2D>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isPainting, setPaintingState] = useState(false);

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

      setPaintingMode(true);
    },
    [paintingMode, context]
  );

  const onHandlePaintingEnd = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isPainting) return;
    e.preventDefault();
    setPaintingState(false);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas_container = document.getElementById('canvas_container');

      if (canvas_container) {
        const { offsetHeight, offsetWidth } = canvas_container;
        const shortSideSize = Math.min(offsetHeight, offsetWidth, 512);
        setCanvasSize({
          width: shortSideSize,
          height: shortSideSize
        });
      }

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      setContext(ctx);
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <div id='canvas_container'>
      <canvas className='frame canvas' ref={canvasRef} {...canvasSize} />
    </div>
  );
};

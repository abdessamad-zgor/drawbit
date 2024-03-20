import { useRef, useState, useEffect, MouseEventHandler } from "react"
import { FrameData, HexColor } from "../state/types"
import { sceneStore as scene } from "../state/scene"

const useFrameDraw = (index: number, demX: number, demY: number, unit: number, frame: FrameData) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isStroke, setIsStroke] = useState<boolean>(false);
  const { updateFrame, initFrame, setCanvasRef, color } = scene(s => ({ updateFrame: s.updateFrame, initFrame: s.initFrame, setCanvasRef: s.setCanvasRef, color: s.color }));
  // this will be reimplemented in Scene as a seprate component and state

  useEffect(() => {
    if (frame && canvasRef.current)
      drawFrame(frame)
    else if (!frame)
      initFrame(index, demX, demY)
    setCanvasRef(index, canvasRef)
  }, [canvasRef.current]);


  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsStroke(true)
    let canvasContext = canvasRef.current.getContext("2d");
    // get element position within canvas
    let canvasRect = canvasRef.current.getBoundingClientRect();
    let targetRect = e.currentTarget.getBoundingClientRect();

    let [x, y] = [targetRect.left - canvasRect.left, targetRect.top - canvasRect.top];

    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, unit, unit)

    let [xInd, yInd] = [Math.ceil(x / unit), Math.ceil(y / unit)];
    console.log(xInd, yInd)
    updateFrame(index, [xInd, yInd])
  }
  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) => setIsStroke(false)

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isStroke) {
      let canvasContext = canvasRef.current.getContext("2d");
      // get element position within canvas
      let canvasRect = canvasRef.current.getBoundingClientRect();
      let targetRect = e.currentTarget.getBoundingClientRect();

      let [x, y] = [targetRect.left - canvasRect.left, targetRect.top - canvasRect.top];

      canvasContext.fillStyle = color
      canvasContext.fillRect(x, y, unit, unit)

      let [xInd, yInd] = [Math.ceil(x / unit), Math.ceil(y / unit)];
      console.log(xInd, yInd)
      updateFrame(index, [xInd, yInd])
    }
  }

  const drawFrame = (data: FrameData) => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j]) {
          let context = canvasRef.current.getContext("2d");
          context.fillStyle = data[i][j];
          context.fillRect(j * unit, i * unit, unit, unit);
        }
      }
    }
  }

  return {
    startStroke: onMouseDown,
    drawStroke: onMouseMove,
    endStroke: onMouseUp,
    canvasRef,
    drawFrame
  }
}

export default useFrameDraw;

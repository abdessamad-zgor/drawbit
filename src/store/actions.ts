import { useRef, useState, useEffect, MouseEventHandler } from "react"
import { FrameData, HexColor } from "./types"
import { sceneStore as scene } from "./scene"

export const useFrameDraw = (index: number, demX: number, demY: number, unit: number, frame: FrameData) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isStroke, setIsStroke] = useState<boolean>(false);
  const { updateFrame } = scene(s => ({ updateFrame: s.updateFrame }));
  // this will be reimplemented in Scene as a seprate component and state
  const [color, setColor] = useState<HexColor>('#ff0000');

  useEffect(() => {
    if (frame && canvasRef.current)
      drawFrame(frame)
    else if (!frame)
      updateFrame(index, Array(demY).fill(Array(demX).fill(null)))
  }, [canvasRef.current]);


  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => setIsStroke(true)
  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) => setIsStroke(false)

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isStroke) {
      let canvasContext = canvasRef.current.getContext("2d");
      // get element position within canvas
      let canvasRect = canvasRef.current.getBoundingClientRect();
      let targetRect = e.currentTarget.getBoundingClientRect();

      let [x, y] = [targetRect.left - canvasRect.left, targetRect.top - canvasRect.top];
      let [xInd, yInd] = [Math.ceil(x / unit), Math.ceil(y / unit)];


      canvasContext.fillStyle = color
      canvasContext.fillRect(x, y, unit, unit)
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

export const useScene = () => {

}

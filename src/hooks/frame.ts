import { useRef, useState, useEffect, MouseEventHandler } from "react"
import { FrameData, HexColor } from "../state/types"
import { sceneStore as scene } from "../state/scene"


function getFrameCanvasId() {
  return Math.floor(Math.random() * Date.now()).toString(16);
}

const useFrameDraw = (index: number, demX: number, demY: number, unit: number, frame: FrameData) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [frameId, setFrameId] = useState<string>("");
  const [isStroke, setIsStroke] = useState<boolean>(false);
  const { updateFrame, initFrame, setCanvasRef, color } = scene(s => ({ updateFrame: s.updateFrame, initFrame: s.initFrame, setCanvasRef: s.setCanvasRef, color: s.color }));

  // set a frame id for export purposes
  useEffect(() => {
    const id = getFrameCanvasId()
    setFrameId(id)
    setCanvasRef(index, id);
  }, [])

  // initializes a frame with null or draws it if already persisted
  useEffect(() => {
    if (frame && canvasRef.current)
      drawFrame(frame)
    else if (!frame)
      initFrame(index, demX, demY)
  }, [canvasRef.current]);


  // start a stroke and paint the currently hovered square
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
    updateFrame(index, [xInd, yInd])
  }

  // end a stroke
  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) => setIsStroke(false)

  // this needs to be faster
  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isStroke) {
      let canvasContext = canvasRef.current.getContext("2d");
      // get element position within canvas
      let canvasRect = canvasRef.current.getBoundingClientRect();
      let targetRect = (e.target as HTMLDivElement).getBoundingClientRect();

      let [x, y] = [targetRect.left - canvasRect.left, targetRect.top - canvasRect.top];

      canvasContext.fillStyle = color
      canvasContext.fillRect(x, y, unit, unit)

      let [xInd, yInd] = [Math.ceil(x / unit), Math.ceil(y / unit)];
      updateFrame(index, [xInd, yInd])
    }
  }

  const drawFrame = (data: FrameData) => {
    let context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, demX * unit, demY * unit)
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j]) {
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
    drawFrame,
    frameId,
  }
}

export default useFrameDraw;

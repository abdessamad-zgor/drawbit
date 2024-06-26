import { useRef, useState, useEffect, MouseEventHandler, useCallback } from "react"
import { FrameData } from "../state/types"
import { getId } from "@/lib/utils";
import useScene from "./scene";

function rmMod(x: number, mod: number) {
  return Math.floor(x) - Math.floor(x) % mod
}

const useFrameDraw = (index: number, frame: FrameData) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isStroke, setIsStroke] = useState<boolean>(false);
  const { setFrame, color, demX, demY, unit, zoom, strokeSize } = useScene();
  const [zoomedUnit, setZoomedUnit] = useState<number>(unit)

  // initializes a frame with null or draws it if already persisted
  useEffect(() => {
    if (frame && canvasRef.current)
      drawFrame(frame);
  }, [canvasRef.current]);

  useEffect(() => {
    setZoomedUnit(Math.floor(unit * (zoom / 100)));
  }, [zoom])

  useEffect(() => {
    if (frame)
      drawFrame(frame);
  }, [zoomedUnit])


  // start a stroke and paint the currently hovered square
  const onMouseDown: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    setIsStroke(true)
    let canvasContext = canvasRef.current.getContext("2d");
    // get element position within canvas
    let canvasRect = canvasRef.current.getBoundingClientRect();
    let targetRect = [rmMod(e.clientX, zoomedUnit), rmMod(e.clientY, zoomedUnit)];

    let [x, y] = [targetRect[0] - canvasRect.left, targetRect[1] - canvasRect.top];

    if (color) {
      canvasContext.fillStyle = color
      canvasContext.fillRect(x, y, zoomedUnit * (strokeSize), zoomedUnit * (strokeSize))
    } else {
      canvasContext.clearRect(x, y, zoomedUnit * (strokeSize), zoomedUnit * (strokeSize))
    }

    let [xInd, yInd] = [Math.ceil(x / zoomedUnit), Math.ceil(y / zoomedUnit)];
    setFrame(index, [xInd, yInd])
  }, [setIsStroke, setFrame, index, zoom, zoomedUnit, color, strokeSize])

  // end a stroke
  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) => setIsStroke(false)

  // this needs to be faster
  const onMouseMove: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    if (isStroke) {
      let canvasContext = canvasRef.current.getContext("2d");
      // get element position within canvas
      let canvasRect = canvasRef.current.getBoundingClientRect();
      let targetRect = [rmMod(e.clientX, zoomedUnit), rmMod(e.clientY, zoomedUnit)];

      let [x, y] = [targetRect[0] - canvasRect.left, targetRect[1] - canvasRect.top];

      if (color) {
        canvasContext.fillStyle = color
        canvasContext.fillRect(x, y, zoomedUnit * (strokeSize), zoomedUnit * (strokeSize))
      } else {
        canvasContext.clearRect(x, y, zoomedUnit * (strokeSize), zoomedUnit * (strokeSize))
      }

      let [xInd, yInd] = [Math.floor(x / zoomedUnit), Math.floor(y / zoomedUnit)];
      setFrame(index, [xInd, yInd])
    }
  }, [isStroke, setFrame, index, zoom, zoomedUnit, color, strokeSize])

  const drawFrame = useCallback((data: FrameData) => {
    let context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, demX * zoomedUnit, demY * zoomedUnit)
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j]) {
          context.fillStyle = data[i][j];
          context.fillRect(j * zoomedUnit, i * zoomedUnit, zoomedUnit, zoomedUnit);
        }
      }
    }
  }, [demX, demY, zoomedUnit, zoom])

  return {
    startStroke: onMouseDown,
    drawStroke: onMouseMove,
    endStroke: onMouseUp,
    canvasRef,
    drawFrame,
    demX,
    demY,
    unit: zoomedUnit
  }
}

export default useFrameDraw;

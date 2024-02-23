import {useRef, useState, useEffect, MouseEventHandler} from "react"

export const useFrameDraw = (unit: number)=>{
  const canvasRef = useRef<HTMLCanvasElement|null>(null)
  const [isStroke, setIsStroke] = useState<boolean>(false)
  // this will be reimplemented in Scene as a seprate component and state
  const [color, setColor] = useState<string>('#ff0000')


  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e)=> setIsStroke(true)
  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e)=> setIsStroke(false)

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e)=>{
    if(isStroke){
      let canvasContext = canvasRef.current.getContext("2d")
      // get element posiotn within canvas
      let canvasRect = canvasRef.current.getBoundingClientRect();
      let targetRect = e.currentTarget.getBoundingClientRect();

      let [x, y] = [targetRect.left-canvasRect.left, targetRect.top-canvasRect.top];
      
      canvasContext.fillStyle = color
      canvasContext.fillRect(x,y, unit, unit)
    }
  }

  return {
    startStroke: onMouseDown,
    drawStroke: onMouseMove,
    endStroke: onMouseUp,
    canvasRef
  }
}

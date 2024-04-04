import { useState, useEffect, MouseEventHandler } from "react";
import { sceneStore as scene } from "../state/scene";
import { HexColor } from "../state/types";

const useColor = () => {
  const { color, setColor } = scene()
  const [togglePicker, setTogglePicker] = useState<boolean>(false)
  const [suggestedColors, setSuggestedColors] = useState<HexColor[]>([
    '#008080',
    '#800080',
    '#FFA500',
    '#FFC0CB',
    '#40E0D0',
    '#00FF00',
    '#4B0082'
  ])

  const handlePickerChange = (color) => {
    setSuggestedColors([color as HexColor, ...suggestedColors.slice(0, suggestedColors.length - 1)])
    setColor(color)
  }

  const togglePickerHandler = () => {
    setTogglePicker(!togglePicker)
  }

  const pickColor: MouseEventHandler<HTMLDivElement> = (e) => {
    let colorCode = e.currentTarget?.getAttribute("hex-code") as HexColor;
    setSuggestedColors([color, ...suggestedColors.filter(c => c != colorCode)])
    setColor(colorCode)
  }

  return {
    color,
    suggestedColors,
    handlePickerChange,
    pickColor,
    togglePickerHandler,
    togglePicker
  }
}

export default useColor;

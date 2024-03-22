import { ChangeEventHandler, useState, useEffect } from 'react'

const useZoom = (baseUnit?: number) => {
  const [zoom, setZoom] = useState<number>(100);
  const [unit, setUnit] = useState<number>(baseUnit || 5);

  useEffect(() => {
    console.log("zoom:", zoom)
    console.log("unit:", unit * (zoom / 100))
    setUnit(unit * (zoom / 100))
  }, [zoom])

  const updateZoom: ChangeEventHandler<HTMLInputElement> = (e) =>
    setZoom(parseInt(e.target.value) as number)

  return {
    zoom,
    unit,
    updateZoom
  }
}

export default useZoom;

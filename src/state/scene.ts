import { MutableRefObject } from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Scene, FrameData, HexColor } from "./types"
import { Color } from "react-color"

function initFrame(demX: number, demY: number) {
  let arr = []
  for (let i = 0; i < demY; i++) {
    arr = [...arr, []]
    for (let j = 0; j < demX; j++) {
      arr[i] = [...arr[i], null]
    }
  }
  return arr
}


export let sceneStore = create<Scene>()(
  persist((set) => ({
    frames: [[[]]],
    refs: [],
    color: "#000",
    zoom: 100,
    dimensions: [100, 50],
    unit: 5,
    name: "Untitled",
    setFrame: (index: number, tileIndex: [number, number]) => {
      set(s => {
        let newFrames = [...s.frames]
        newFrames[index][tileIndex[1]][tileIndex[0]] = s.color
        return {
          ...s,
          frames: newFrames
        }
      })
    },
    initFrame: (index: number, demX: number, demY: number) => {
      set(s => ({
        ...s,
        frames: s.frames.map((f, i) => index == i ? initFrame(demX, demY) : f),
        refs: [null]
      }))
    },
    addFrame: (index?: number) => {
      set(s => ({
        ...s,
        frames: index && index != s.frames.length - 1 ?
          [...s.frames.slice(0, index + 1), [[]], ...s.frames.slice(index + 1)] :
          [...s.frames, [[]]],
      }))
    },
    deleteFrame: (index: number) => {
      set(s => ({
        ...s,
        frames: [...s.frames].filter((_, i) => i != index),
        refs: [...s.refs].filter((_, i) => i != index)
      }))
    },
    setName: (name: string) =>
      set(s => ({ ...s, name })),
    setColor: (color: string | Color | HexColor) =>
      set(s => ({ ...s, color: color as HexColor })),
    setCanvasRef: (index: number, ref: string) =>
      set(s => ({
        ...s,
        refs: s.refs.length == s.frames.length ?
          s.refs.map((r, i) => i == index ? ref : r) :
          index != s.refs.length - 1 ?
            [...s.refs.slice(0, index + 1), ref, ...s.refs.slice(index + 1)] :
            [...s.refs, ref]
      })),
    setDimensions: (demX: number, demY: number) =>
      set(s => ({ ...s, dimensions: [demX, demY] })),
    setUnit: (unit: number) =>
      set(s => ({ ...s, unit })),
    setZoom: (zoom: number) =>
      set(s => ({ ...s, zoom }))
  }),
    {
      name: "drawbit-data-11",
    }
  )
)


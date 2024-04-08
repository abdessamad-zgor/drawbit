import { create } from "zustand"
import { combine, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { FrameData, HexColor } from "./types"
import { Color } from "react-color"
import { getId } from "@/lib/utils"

export type Frame = {
  demX: number;
  demY: number;
  unit: number;
  frame?: FrameData;
}

export interface Scene {
  frames: FrameData[];
  name: string;
  zoom: number;
  dimensions: [number, number];
  unit: number;
  color: HexColor;
  refs: string[];
}

export interface SceneActions {
  setCanvasRef: (index: number, ref: string) => void;
  setDimensions: (demX: number, demY: number) => void;
  setUnit: (unit: number) => void;
  setName: (name: string) => void;
  initFrame: (index: number, demX: number, demY: number) => void;
  setFrame: (index: number, tileIndex: [number, number]) => void;
  addFrame: (index: number) => void;
  deleteFrame: (index: number) => void;
  setColor: (color: string | Color | HexColor) => void;
  setZoom: (zoom: number) => void;
}

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

export let sceneStore = create(
  persist(
    immer(
      combine({
        frames: [{ id: getId(), data: [[]] }],
        refs: [],
        color: "#000",
        zoom: 100,
        dimensions: [40, 25] as [number, number],
        unit: 20,
        name: "Untitled",
        strokeSize: 1
      },
        (set) => ({
          setFrame: (index: number, tileIndex: [number, number]) => {
            set(s => {
              s.frames[index].data[tileIndex[1]][tileIndex[0]] = s.color
            })
          },
          addFrame: (index?: number) => {
            set(s => {
              s.frames = [...s.frames.slice(0, index + 1), { id: getId(), data: initFrame(s.dimensions[0], s.dimensions[1]) }, ...s.frames.slice(index + 1)]
            })
          },
          duplicateFrame: (index: number) => {
            set(s => {
              s.frames = [...s.frames.slice(0, index + 1), { id: getId(), data: s.frames[index].data }, ...s.frames.slice(index + 1)]
            })
          }
          ,
          deleteFrame: (index: number) => {
            set(s => {
              s.frames = [...s.frames.filter((_, i) => i != index)]
              s.refs = [...s.refs.filter((_, i) => i != index)]
            })
          },
          setName: (name: string | null) =>
            set(s => {
              s.name = name;
            }),
          setColor: (color: string | Color | HexColor) =>
            set(s => {
              s.color = color as HexColor;
            }),
          setCanvasRef: (index: number, ref: string) =>
            set(s => {
              if (s.refs.length == s.frames.length)
                s.refs[index] = ref;
              else
                s.refs = [...s.refs.slice(0, index), ref, ...s.refs.slice(index)]
            }),
          setDimensions: (demX: number, demY: number) =>
            set(s => {
              s.dimensions = [demX, demY]
            }),
          setUnit: (unit: number) =>
            set(s => {
              s.unit = unit
            }),
          setZoom: (zoom: number) =>
            set(s => {
              s.zoom = zoom
            }),
          setStrokeSize: (size: number) =>
            set(s => {
              s.strokeSize = size
            })
        }))),
    {
      name: "drawbit-data",
    }
  )
)


import { create } from "zustand"
import { combine, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { FrameData, HexColor } from "./types"
import { Color } from "react-color"
import { getId } from "@/lib/utils"

export type Frame = {
  id: string,
  data: FrameData;
}

export interface Scene {
  frames: Frame[];
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

export function initFrame(dimensions: [number, number]) {
  let arr = []
  for (let i = 0; i < dimensions[1]; i++) {
    arr = [...arr, []]
    for (let j = 0; j < dimensions[0]; j++) {
      arr[i] = [...arr[i], null]
    }
  }
  return arr
}

const defaultDimensions: [number, number] = [100, 40]

export let sceneStore = create(

  immer(
    combine({
      frames: [{ id: getId(), data: initFrame(defaultDimensions) }],
      color: "#000",
      zoom: 100,
      dimensions: defaultDimensions,
      unit: 10,
      name: "Untitled",
      strokeSize: 1
    },
      (set) => ({
        setFrames: (frames: Frame[]) => {
          set(s => {
            s.frames = frames
          })
        },
        setFrame: (index: number, tileIndex: [number, number]) => {
          set(s => {
            for (let i = 0; i < s.strokeSize; i++) {
              if (tileIndex[1] + i < s.dimensions[1] && tileIndex[0] + i < s.dimensions[0])
                s.frames[index].data[tileIndex[1] + i][tileIndex[0] + i] = s.color
            }
          })
        },
        addFrame: (index?: number) => {
          set(s => {
            s.frames = [...s.frames.slice(0, index + 1), { id: getId(), data: initFrame(s.dimensions) }, ...s.frames.slice(index + 1)]
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
        setDimensions: (dimensions: [number, number]) =>
          set(s => {
            s.dimensions = dimensions
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
          }),
      }))
  )
)


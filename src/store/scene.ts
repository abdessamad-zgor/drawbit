import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Scene, FrameData } from "./types"


export let sceneStore = create<Scene>()(
  persist((set) => ({
    frames: [[[]]],
    color: "#000",
    name: "Untitled",
    updateFrame: (index: number, data: FrameData) => {
      console.log("frame " + index + " :", data)
      set(s => ({ ...s, frames: s.frames.map((f, i) => index == i ? data : f) }))
    },
    //hasData: () => {
    //return frames[0][0].length != 0
    //},
    addFrame: (index?: number) => {
      set(s => ({ ...s, frames: index && index != s.frames.length - 1 ? [...s.frames.slice(0, index + 1), [[]], ...s.frames.slice(index + 1)] : [...s.frames, [[]]] }))
    },
    deleteFrame: (index: number) => {
      set(s => ({ ...s, frames: [...s.frames].filter((_, i) => i != index) }))
    }
  }), { name: "drawbit-data" })
)


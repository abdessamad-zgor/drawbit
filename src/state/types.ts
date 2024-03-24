import { MutableRefObject } from "react";
import { Color } from "react-color";
import { z } from "zod";

const hexColorSchema = z.custom<`#${string}`>((val) => {
  let hexCodeRegex = new RegExp(/#[a-f\d]{3}(?:[a-f\d]?|(?:[a-f\d]{3}(?:[a-f\d]{2})?)?)\b/gmi);
  return typeof val == "string" && hexCodeRegex.test(val)
})

export type HexColor = z.infer<typeof hexColorSchema>;

export type FrameData = (HexColor | null)[][];

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
  initFrame: (index: number, demX: number, demY: number) => void;
  setFrame: (index: number, tileIndex: [number, number]) => void;
  addFrame: (index: number) => void;
  deleteFrame: (index: number) => void;
  setName: (name: string) => void;
  setColor: (color: string | Color | HexColor) => void;
  setCanvasRef: (index: number, ref: string) => void;
  setDimensions: (demX: number, demY: number) => void;
  setUnit: (unit: number) => void;
  setZoom: (zoom: number) => void;
}


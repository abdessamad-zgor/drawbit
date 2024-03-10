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
  color: HexColor;
  //hasData: () => boolean;
  updateFrame: (index: number, data: FrameData) => void;
  addFrame: (index: number) => void;
  deleteFrame: (index: number) => void;
}

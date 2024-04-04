import { z } from "zod";

const hexColorSchema = z.custom<`#${string}`>((val) => {
  let hexCodeRegex = new RegExp(/#[a-f\d]{3}(?:[a-f\d]?|(?:[a-f\d]{3}(?:[a-f\d]{2})?)?)\b/gmi);
  return typeof val == "string" && hexCodeRegex.test(val)
})

export type HexColor = z.infer<typeof hexColorSchema>;

export type FrameData = (HexColor | null)[][];



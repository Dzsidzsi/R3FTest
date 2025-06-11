import {
  Canvas,
  type ThreeElements,
  type ThreeEvent,
} from "@react-three/fiber";
import type { Framework } from "~/framework/framework";
import { FrameworkEvents } from "~/framework/FrameworkEvents";

export default function Renderer({ framework }: { framework: Framework }) {
    
  const handleClick = (e: ThreeEvent<PointerEvent>) => {
    //TODO - check event key and other factors
    if (e.button != 0) return;
    //TODO intersect
    framework.emit(FrameworkEvents.EntitySelected, { guid: "test" });
  };

  return <Canvas onPointerDown={(e) => {
    handleClick(e);
  }}></Canvas>;
}

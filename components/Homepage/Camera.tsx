// import {useFrame}
import { useFrame } from "@react-three/fiber";

export default function Camera() {
  useFrame(({ clock, camera }) => {
    camera.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
  });

  return null;
}

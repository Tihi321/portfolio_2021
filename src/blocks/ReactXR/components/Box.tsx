import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

interface IBox {
  position: number[];
  angle?: number;
  penumbra?: number;
}

interface IMesh {
  rotation: {
    x: number;
    y: number;
  };
}

export const Box = (props: IBox) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef({} as IMesh);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

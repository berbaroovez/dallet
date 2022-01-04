/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cone: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Course({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("./models/course.glb") as GLTFResult;
  return (
    <group
      ref={group}
      rotation={[0, -Math.PI / 2, 0]}
      {...props}
      dispose={null}
    >
      <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.screen} />
      <mesh
        geometry={nodes.Cube001_1.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Cube001_2.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        geometry={nodes.Cone.geometry}
        material={materials["Material.001"]}
        position={[0.1, 0.01, 0]}
        rotation={[-1.79, 0.48, 0.11]}
      />
    </group>
  );
}

useGLTF.preload("./models/course.glb");
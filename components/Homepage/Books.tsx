/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube005_2: THREE.Mesh;
    Cube005_3: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    Cube008_3: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
    pages: THREE.MeshStandardMaterial;
    blue: THREE.MeshStandardMaterial;
    purple: THREE.MeshStandardMaterial;
    brown: THREE.MeshStandardMaterial;
    silver: THREE.MeshStandardMaterial;
  };
};

export default function Books({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("./models/books.glb") as GLTFResult;
  return (
    <group
      ref={group}
      rotation={[0, -Math.PI / 2, 0]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0.3, 0.09, 0.34]}
        scale={[-0.01, 0.06, 0.03]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[0.3, 0.09, 0.27]}
        scale={[-0.01, 0.06, 0.02]}
      />
      <group scale={[0.59, 0.16, 0.87]}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={nodes.Cube_1.material}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={nodes.Cube_2.material}
        />
      </group>
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[0.3, 0.25, 0.34]}
        scale={[-0.01, 0.06, 0.03]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[0.3, 0.25, 0.27]}
        scale={[-0.01, 0.06, 0.02]}
      />
      <group position={[0, 0.17, 0]} scale={[0.59, 0.16, 0.87]}>
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={nodes.Cube005_1.material}
        />
        <mesh
          geometry={nodes.Cube005_2.geometry}
          material={nodes.Cube005_2.material}
        />
        <mesh
          geometry={nodes.Cube005_3.geometry}
          material={nodes.Cube005_3.material}
        />
      </group>
      <mesh
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[0.3, 0.41, 0.34]}
        scale={[-0.01, 0.06, 0.03]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[0.3, 0.41, 0.27]}
        scale={[-0.01, 0.06, 0.02]}
      />
      <group position={[0, 0.33, 0]} scale={[0.59, 0.16, 0.87]}>
        <mesh
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
        />
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={nodes.Cube008_1.material}
        />
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={nodes.Cube008_2.material}
        />
        <mesh geometry={nodes.Cube008_3.geometry} material={materials.purple} />
      </group>
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials.brown}
        position={[0, 0.25, 0]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials.silver}
        position={[0.31, 0.33, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/books.glb");
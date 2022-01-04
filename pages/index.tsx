import styled from "styled-components";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import Course from "../components/Homepage/Course";
import Books from "../components/Homepage/Books";
import Bag from "../components/Homepage/Bag";
import Camera from "../components/Homepage/Camera";
export default function Home() {
  return (
    <IndexZone>
      <HeroZone>
        <Canvas>
          <Camera />
          {/* <color attach="background" args={["#050500"]} /> */}

          <spotLight position={[5, 10, 11]} />

          <Suspense fallback={null}>
            {/* <Environment preset="lobby" /> */}
            {/* x,y,z */}
            <Books
              position={[-2, 2, 0]}
              rotation={[Math.PI / 4.7, -Math.PI / 4.4, Math.PI * 2.2]}
            />
            <Course
              position={[-2, 1, 0]}
              scale={0.7}
              rotation={[Math.PI / 4.4, -Math.PI / 3, Math.PI * 2.2]}
            />
            <Books
              position={[-1.7, 0, 1.4]}
              rotation={[Math.PI * 2, -Math.PI / 3, Math.PI * 2.2]}
            />
            <Bag
              position={[0, 0, 0]}
              scale={1}
              rotation={[0, -Math.PI / 2, -Math.PI * 2.1]}
            />
            <Course
              position={[1.7, 1.2, 1.5]}
              scale={0.8}
              rotation={[Math.PI * 1.8, -Math.PI / 2.2, Math.PI * -2.2]}
            />
            <Books
              position={[1.7, 0, 1]}
              rotation={[0, Math.PI * 1.2, -Math.PI * 2.1]}
            />
          </Suspense>
        </Canvas>
      </HeroZone>
    </IndexZone>
  );
}

const Title = styled.h1`
  font-size: 50px;
`;

const HeroZone = styled.div`
  width: 100%;
  height: 80%;
`;
const IndexZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`;

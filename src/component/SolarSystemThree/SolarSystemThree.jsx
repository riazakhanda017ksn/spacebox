import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import sunTexture from "../../image/texture/download7.jpeg";
import "./SolarSystemThree.scss";
import tx1 from "../../image/texture/download.jpeg";
import tx2 from "../../image/texture/download2.jpeg";
import tx3 from "../../image/texture/download3.jpeg";
import tx4 from "../../image/texture/download4.jpeg";
import tx5 from "../../image/texture/download5.jpeg";
import tx6 from "../../image/texture/download6.jpeg";

export default function SolarSystemThree() {
  const random = (a, b) => a + Math.random() * b;
  const randomInt = (a, b) => Math.floor(random(a, b));
  const randomColor = () =>
    `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;
  const shuffle = (a) => {
    const temp = a.slice(0);
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp;
  };

  const textures = shuffle([tx1, tx2, tx3, tx4, tx5, tx6]);

  const planetData = [];
  const totalPlanets = 6;
  for (let index = 0; index < totalPlanets; index++) {
    planetData.push({
      id: index,
      color: randomColor(),
      xRadius: (index + 1.5) * 4,
      zRadius: (index + 1.5) * 2,
      size: random(0.5, 1),
      speed: random(0.1, 0.6),
      offset: random(0, Math.PI * 2),
      rotationSpeed: random(0.01, 0.03),
      textureMap: textures[index]
    });
  }
  return (
    <div className="rooot">
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }} style={{bottom:"70px"}}>
        <Suspense fallback={null}>
          <Sun />
          {planetData.map((planet) => (
            <Planet planet={planet} key={planet.id} />
          ))}
          <Lights />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
function Sun() {
  const texture = useLoader(THREE.TextureLoader, sunTexture);
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
function Planet({
  planet: {
    color,
    xRadius,
    zRadius,
    size,
    speed,
    offset,
    rotationSpeed,
    textureMap
  }
}) {
  const planetRef = React.useRef();
  const texture = useLoader(THREE.TextureLoader, textureMap);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#393e46" linewidth={10} />
    </line>
  );
}

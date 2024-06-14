import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; // Ensure this path is correct

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true); // Ensure caching with 'true'

  useEffect(() => {
    console.log("isMobile:", isMobile);
  }, [isMobile]);

  const scale = isMobile ? 0.6 : 0.8;
  const position = isMobile ? [0, -2.5, -1] : [0, -4, -1.5];
  const rotation = [-0.01, -0.2, -0.1];

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="blue" />
      <pointLight intensity={1.5} />
      <primitive object={scene} scale={scale} position={position} rotation={rotation} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

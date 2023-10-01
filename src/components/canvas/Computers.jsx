import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Preload, useGLTF } from '@react-three/drei';
{/* useGLTF can be used to import 3D models */ }
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh className='touch-none click-none select-none'>
      <hemisphereLight intensity={2}
        groundColor="black" />

      {/* The light that shines to the computer  */}
      <pointLight intensity={1} />

      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -2.2]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setMobile] = useState(false);

  // It is just changing the isMobile variable
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Initial check
    setMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='touch-none click-none select-none'
    >

      {/* Not from Three.js. It comes from react
          it allows us to have a loader while the 
          model is loading
      */}

      <Suspense fallback={<CanvasLoader/>}>
        {/* it lets us move the model around */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          />

          {/* It limits the movement of the model.
              We can move the model up to certain angles.
          */}

          <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>

    </Canvas>
  )
}

export default ComputersCanvas
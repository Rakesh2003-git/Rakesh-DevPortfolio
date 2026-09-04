import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const { positions, particles } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const particles = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = Math.random() * 10 + 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      particles.push({
        speed: 0.005 + Math.random() * 0.001,
      });
    }

    return {
      positions,
      particles,
    };
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;

    const positionAttribute =
      mesh.current.geometry.attributes.position;

    const positionArray = positionAttribute.array;

    for (let i = 0; i < count; i++) {
      let y = positionArray[i * 3 + 1];

      y -= particles[i].speed;

      if (y < -2) {
        y = Math.random() * 10 + 5;
      }

      positionArray[i * 3 + 1] = y;
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
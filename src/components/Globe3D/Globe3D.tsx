import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Points, PointMaterial } from '@react-three/drei';
import { Group } from 'three';

const GlobeContent = () => {
    const globeRef = useRef<Group>(null);

    useFrame((state, delta) => {
        if (globeRef.current) {
            // Auto rotation
            globeRef.current.rotation.y += delta * 0.1;

            // Mouse interaction (lerp for smoothness)
            const x = state.pointer.x * 0.5;
            const y = state.pointer.y * 0.5;

            // Inverted Y axis for natural feel
            // Reduced lerp factor (delta * 1.5) for smoother easing
            globeRef.current.rotation.x += (-y - globeRef.current.rotation.x) * delta * 1.5;
            globeRef.current.rotation.y += (x - globeRef.current.rotation.y) * delta * 1.5;
        }
    });

    return (
        <group ref={globeRef}>
            {/* Wireframe Sphere */}
            <Sphere args={[2.8, 32, 32]}>
                <meshBasicMaterial
                    color="#00f0ff"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Sphere>

            {/* Inner Sphere for depth */}
            <Sphere args={[2.75, 32, 32]}>
                <meshBasicMaterial
                    color="#000000"
                    transparent
                    opacity={0.9}
                />
            </Sphere>
        </group>
    );
};

const Particles = () => {
    const ref = useRef<any>(null);

    // Generate random points manually to avoid dependency issues
    const sphere = useMemo(() => {
        const count = 3000;
        const radius = 4; // Increased radius
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Random point in sphere
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = Math.cbrt(Math.random()) * radius; // Cubic root for uniform distribution

            const sinPhi = Math.sin(phi);
            const x = r * sinPhi * Math.cos(theta);
            const y = r * sinPhi * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00f0ff"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

export const Globe3D = () => {
    return (
        <div style={{ width: '100%', height: '600px', position: 'relative', zIndex: 1 }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                style={{ width: '100%', height: '100%' }}
            >
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <GlobeContent />
                <Particles />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
};

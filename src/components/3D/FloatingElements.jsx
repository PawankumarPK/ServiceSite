import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Box, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'

const FloatingShape = ({ position, geometry = 'sphere', color = '#9CC118' }) => {
    const meshRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        meshRef.current.rotation.x = Math.cos(t / 2) / 2
        meshRef.current.rotation.y = Math.sin(t / 4) / 2
        meshRef.current.position.y = position[1] + Math.sin(t) * 0.1
    })

    const renderGeometry = () => {
        switch (geometry) {
            case 'box':
                return (
                    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
                        <meshStandardMaterial
                            color={color}
                            attach="material"
                            roughness={0.4}
                        />
                    </Box>
                )
            case 'torus':
                return (
                    <Torus ref={meshRef} position={position} args={[0.3, 0.1, 16, 32]}>
                        <meshStandardMaterial
                            color={color}
                            attach="material"
                            roughness={0.2}
                        />
                    </Torus>
                )
            default:
                return (
                    <Sphere ref={meshRef} position={position} args={[0.3, 32, 32]}>
                        <meshStandardMaterial
                            color={color}
                            attach="material"
                            roughness={0.1}
                        />
                    </Sphere>
                )
        }
    }

    return renderGeometry()
}

const FloatingElements = () => {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingShape position={[-2, 1, 0]} geometry="sphere" color="#9CC118" />
                <FloatingShape position={[2, -1, 0]} geometry="box" color="#DBD525" />
                <FloatingShape position={[0, 2, -1]} geometry="torus" color="#27363B" />
                <FloatingShape position={[-3, -2, 1]} geometry="sphere" color="#9CC118" />
                <FloatingShape position={[3, 0, -2]} geometry="box" color="#DBD525" />
            </Canvas>
        </div>
    )
}

export default FloatingElements

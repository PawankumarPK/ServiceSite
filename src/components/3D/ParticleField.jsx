import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points } from '@react-three/drei'
// import * as random from 'maath/random/dist/maath-random.esm'

const ParticleField = (props) => {
    const ref = useRef()
    const [sphere] = useMemo(() => {
        const positions = new Float32Array(5000)
        for (let i = 0; i < 5000; i += 3) {
            const radius = Math.random() * 1.5
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(Math.random() * 2 - 1)

            positions[i] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i + 2] = radius * Math.cos(phi)
        }
        return [positions]
    }, [])

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <pointsMaterial
                    transparent
                    color="#9CC118"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const ParticleCanvas = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleField />
            </Canvas>
        </div>
    )
}

export default ParticleCanvas

import { Environment, useGLTF, Float, OrbitControls } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { AmbientLight } from 'three'
import { useEffect } from 'react'
import * as THREE from 'three';


const Techicon = ({model}) => {
    const scene = useGLTF(model.modelPath);
    useEffect(() =>{
        if(model.name === 'Full Stack Developer'){
            scene.scene.traverse((child)=>{
                if(child.isMesh && child.name === 'object_5'){
                    child.material = new THREE.MeshStandardMaterial({color:'white'})
                }
            })
        }

    },[scene])
  return (
    <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[5,5,5]} intensity={1}/>
        <Environment preset="city"/>
 
        <OrbitControls enableZoom={false}/>
        <Float speed={5.5} rotationIntensity={1} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}/>
            </group>

        </Float>
    </Canvas>
  )
}

export default Techicon
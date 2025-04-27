// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import * as THREE from 'three'; // Import THREE

import {Clone, useGLTF } from '@react-three/drei';

const Model=()=>{
    // const model=useLoader(
    //     GLTFLoader, 
    //     // './FlightHelmet/glTF/FlightHelmet.gltf',
    //     './hamburger.glb',
    //     (loader)=>
    //     {
    //     const dracoLoader=new DRACOLoader()
    //     dracoLoader.setDecoderPath('./draco/')
    //     loader.setDRACOLoader(dracoLoader)
    //   });
    //USE drei

    const model=useGLTF('./hamburger.glb')
    return <>
    <Clone scale={0.35} position-x={-4}  object={model.scene}/>
    <Clone scale={0.35} position-x={0}  object={model.scene}/>
    <Clone scale={0.35} position-x={4}  object={model.scene}/>
    </>
};
export default Model;
useGLTF.preload('./hamburger.glb')
import { useGLTF,useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Fox=()=>{
const fox=useGLTF('./Fox/glTF/Fox.gltf')
const animations=useAnimations(fox.animations, fox.scene)

useEffect(()=>{
const action=animations.actions.Walk
action.play()
const acton2=animations.actions.Survey
acton2.play()
}, [])
console.log(animations)
    return<>
     <primitive
      scale={0.02}
      object={fox.scene}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
      />
      </>
   
};
export default Fox;
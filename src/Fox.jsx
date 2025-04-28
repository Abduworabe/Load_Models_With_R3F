import { useGLTF,useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

const Fox=()=>{
const fox=useGLTF('./Fox/glTF/Fox.gltf')

const animations=useAnimations(fox.animations, fox.scene)
const{animationName}= useControls('Animationfox',{
    animationName:{options:animations.names}
})
useEffect(()=>{
// const action=animations.actions.Run
// action.play()
// const acton2=animations.actions.Survey
// acton2.play()
// const action=animations.actions.Run.play()
const action=animations.actions[animationName]
action.play()
// window.setTimeout(()=>{
//     animations.actions.Walk.play()
//     animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1)

// }, 6000)
}, [animationName])
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
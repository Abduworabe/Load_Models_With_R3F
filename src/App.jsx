import { Perf } from 'r3f-perf';
import { OrbitControls, Sky } from '@react-three/drei';
import Model from './Model.jsx';
import { Suspense } from 'react';
import * as THREE from 'three'; // Import THREE
import Placeholder from './Placeholder.jsx';


const App = () => {
  //   To make the plane visible from both sides, you can set the side property of the meshStandardMaterial to THREE.DoubleSide. Here's how you can modify your code:

  // Import THREE from the three package.
  // Set the side property of the meshStandardMaterial to THREE.DoubleSide.

  //Loading a model
  //we are only going to discuss GLTF loading sine  its, the standatrd and the most 
  // frequently used format
  //R3F  provides a hook named useLoader that abstract loading in app.js import useLoader from fiber
  //To use it, we need to send it the Three.js loader class we want to use and the path to the file.

  //Because it’s a GLTF, we need to import GLTFLoader from three:
  //import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  //In App, we can now call useLoader:
  // Note that we started the path to the file with ./ which should work in most cases. './hamburger.glb' will look for the file named hamburger.glb in the same folder and since the files located in the /public/ folder are made available like if they are at the root of the website, the model will load. Still, when putting your experience online, you might have to do some tweaks according to your website, the path to access it, specific folders structure and rewriting rules.
  // Back to our project, you should see an object containing our model in the console.
  // To display it in our scene, we need to add model.scene somewhere in the JSX. Unfortunately, we can’t just write it like this:
  // We need to add model.scene somewhere inthe jsx unfortunately we can't just write int like thies 
  //{model.scene} or <model.scene/>
  //so we need to use <primiteve>
  //>primiteve> is a holder for whatever we want to put in it It's not a real object, but it's a container supported by R3F  that
  //will namdle an ddisplay whatever we put in its object arrtibute 

  //If we try to load the DRACO compressed model, we get an error
  //we need to istantite a DRACOLoader class and add it to the GLTFLoader
  //instance with setDRACOLoader()
  // to do that we can pass a third argument  to the useLoader() and send it a 
  // function that will give us access to the loader instance.
  //Hear, we can associate a DRACOLoader instance 
  //import DRACOLOADER FROM THREE, 
  //instantiate it in the function (the draco decoder  folder is availlable in the /public/ folder) and associate it with the Gltfloader instance using setDracoloader()

  //you need to keep your Developer Tools open if you want the network throttling to work

  //Suspense
  //To implenent a lazy loading, we can use the <suspense> tag
  //it is a React component that wil wait for the process to be done berore rendering the component
  //unfortunately we have omly on ecomponent in our application and it's app
  // waiting for the model to load before rendering app would produce the same result
  //we need to put our model in a separated compondent
  //Create a model.jsx firle an d export moderl functon by default 

  // const model=useLoader(
  //     GLTFLoader, 
  //     './FlightHelmet/glTF/FlightHelmet.gltf',
  //     (loader)=>
  //     {
  //     const dracoLoader=new DRACOLoader()
  //     dracoLoader.setDecoderPath('./draco/')
  //     loader.setDRACOLoader(dracoLoader)
  //   });
  // for me not work so  i can use GLTFLodaer


  // const model=useLoader(
  //   GLTFLoader, 
  //   './hamburger.glb'
  // )

  //Leaz Loding currently, R3F is holding the rendering of the App.js as long as everything isn't ready in our scene 
  //Thise incluedes the loading of the model
  //Loading a bigger model
  //To see that more clearly, we can swithch to the Flight Helmer 
  //chage the path of the file to '.lflightHelmet/gltf/flighthelmet. jltg'

  //wow finaly workes dracoLoder.
  //fix it with scale and position-y on the <primitive>

  //NetWork throttlong
  //We can activate the nerwork throttling to simulate a real-life experience with  model that takes time to load
  //open you Developer Tools and go into the Network tab
  //Activate the throttling

  //we can add the <Suspense>
  //in Experience.js. import suspense from react 
 //FallBack
 //one cool fearture with the <Suspense> is that we can set a fallback 
 //the fallback is what the user will see if the component is not ready (in our case , while the model is  loading)
 //to define the fallback, we can use the fallback attribute
//in there, we can put something that user will see while it's loading Set a <mesh>

//writin components inside an attribute isn't very convenient
//we could have written it in multiople lines
//it's better, but lets go further an d crearte a component 
  //We set the position an dscale according to the helmet model, but what if we 
  //have differnet models in our projedcts with various sixes an dpositons?
//We want to let the developer ser attributes on the <placeHolder> and forward them to the <mesh>

// Let's get back to our hamburter and disable the Network throttling in model.js,
//change the path back to ./jamburger.jlb
 // remove the positon-y attribute and set the scale to 0.35

 //GLTF loading with drei
//it wasn't that complicated, an dyet, we ahd to do some twists and apply a bunch of techniques 
//as always, there is an easier way thanks to drei
//Drei implements multiple loader helpers like useGltf and useFBX 
//in model.jsx imprt useGLTF from drei


//What about the DRACO  Compressed version?
//useGLTF will take care of everything for us and we don't even have to  provide the DRACO decoder in the  /pblic/folder

//Preloading
//our model will start loading only when the component is instantiated 
//if we ahd conditons to display the component and that conditon suddenly is true , the user would see teh placeholder 
//Maybe we want to load the model as soon as possible
//We can do that with the preload method on useGLTF 
//Even if useGLTF is a function it can have properties and methods
//in the model.js file after the model function call the prelodad with the model URL

//multiple instaces

//what about the second breakfast?😂
//pippin 

//what if we want second hamburger? Or three? Or a hundred?

//Drei makes that possible with the Clone helper
//im model.jsx import Clone from drei

// Replace the >primitive> by <clone> with the same attributes 
//We can crearte other clones very easily (don't forger to use a fragment <> <> since the component must return only one element)

//GLTF TO componennt
//if we want to manipulate the differnt parts of a hamburger, we need to traverse the loaded model, 
//search for the fight child, save it in some ways and apply whatever we need to it 

//Wouldn't it be awesome to have our hamburger available as a component with everything inside a simple jsx that er can manipulate, 
//however we want?
//That's what GLTF React three fiber does


return (
    <>
      <OrbitControls makeDefault />
      {/* <Sky /> */}

      <Perf position="top-left" />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />


      {/* <mesh castShadow  position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
        Set a color for the material 
      </mesh> */}
      {/* <mesh  castShadow scale={1.5} position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh> */}
      <mesh receiveShadow scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial side={THREE.DoubleSide} color="greenyellow" /> {/* Set side to DoubleSide */}
      </mesh>
      {/* <primitive scale={5} position-y={-1}  object={model.scene}/> */}

      <Suspense fallback={<Placeholder  position-y={0.5} scale={[2,3,2]}/> }>
        <Model />
      </Suspense>
     


    </>
  );
};
export default App;

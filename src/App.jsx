import { Perf } from 'r3f-perf';
import { OrbitControls, Sky } from '@react-three/drei';
const App = () => {
  return (
    <>
      <OrbitControls />
      <Sky />
      <Perf position="top-left" />

      <mesh position-y={1} position-x={-1.5}>
        <sphereGeometry />
        <meshBasicMaterial color="green" />
        {/* Set a color for the material  */}
      </mesh>
      <mesh position-y={1} position-x={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="#ff0000" />
      </mesh>
    </>
  );
};
export default App;

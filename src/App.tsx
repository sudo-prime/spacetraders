import {useState} from "react";
import { Provider } from "react-redux";
import { store } from './redux/store'
import { Mosaic, MosaicNode, MosaicWindow, MosaicParent, MosaicZeroState } from 'react-mosaic-component';
import FleetWindow from "./components/windows/FleetWindow/FleetWindow";
import MapWindow from "./components/windows/MapWindow/MapWindow";

import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import './App.css'

// const getLeaves = (tree: MosaicNode<string> | null): MosaicNode<string>[] => {
//   const treeAsParent = tree as MosaicParent<string>;
//   if (tree == null) {
//     return [];
//   } else if (treeAsParent?.direction != null) {
//     return getLeaves(treeAsParent?.first).concat(getLeaves(treeAsParent?.second));
//   } else {
//     return [tree];
//   }
// }

const uid = function(){
  return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36)
}

const NAME_TO_ELEMENT_MAP = {
  'fleet': <FleetWindow ships={[{name: 'yo momma', capacity: 100, fuel: 100}]}/>,
  'map': <MapWindow />,
  'idk': <div>Bottom Right Window</div>,
}

const ID_TO_ELEMENT_MAP: Map<string, JSX.Element> = new Map<string, JSX.Element>();
Object.values(NAME_TO_ELEMENT_MAP).forEach((element) => {
  const newId = uid();
  ID_TO_ELEMENT_MAP.set(newId, element);
});
console.log(ID_TO_ELEMENT_MAP);

const App = () => {

  const ids = Array.from(ID_TO_ELEMENT_MAP.keys());

  const [mosaicState, setMosaicState] = useState<MosaicNode<string> | null>({
    direction: 'row',
    first: ids[0],
    second: {
      direction: 'column',
      first: ids[1],
      second: ids[2],
    },
    splitPercentage: 40,
  })

  const onChange = (state: MosaicNode<string> | null) => {
    setMosaicState(state);
  };
  const onRelease = (state: MosaicNode<string> | null) => {
  };
  const createNode = () => uid();

  return (
    <Provider store={store}>
      <div id="app">
        <Mosaic
          blueprintNamespace="bp5"
          zeroStateView={<MosaicZeroState createNode={createNode} />}
          renderTile={(id, path) => (
            <MosaicWindow 
              path={path} 
              createNode={createNode} 
              title={id}
            >
              {id}
              {ID_TO_ELEMENT_MAP.get(id)}
            </MosaicWindow>
          )}
          value={mosaicState}
          onChange={onChange}
        />
      </div>
    </Provider>
  );
};

export default App;

import {useState} from "react";
import { Provider } from "react-redux";
import { store } from './redux/store'
import { Mosaic, MosaicWindow } from 'react-mosaic-component';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';
import FleetWindow from "./components/windows/FleetWindow/FleetWindow";
import MapWindow from "./components/windows/MapWindow/MapWindow";

import './App.css'

const App = () => {
  const [newId, setNewId] = useState(1); 

  const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    a: <FleetWindow ships={[{name: 'yo momma', capacity: 100, fuel: 100}]}/>,
    b: <MapWindow /> ,
    c: <div>Bottom Right Window</div>,
  };
  const TITLE_MAP = {
    a: "Fleet",
    b: 'Map',
    c: "idk"
  };
  
  return (
    <Provider store={store}>
      <div id="app">
        <Mosaic
          blueprintNamespace="bp5"
          renderTile={(id, path) => (
            <MosaicWindow path={path} createNode={() => {
              const nodeId = newId;
              setNewId(newId + 1);
              return nodeId;
            }} title={TITLE_MAP[id]}>
              {id}
              {ELEMENT_MAP[id]}
            </MosaicWindow>
          )}
          initialValue={{
            direction: "row",
            first: "a",
            second: {
              direction: "column",
              first: "b",
              second: "c"
            }
          }}
        />
      </div>
    </Provider>
  );
};

export default App;

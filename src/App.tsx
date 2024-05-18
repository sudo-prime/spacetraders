import {useState} from "react";
import { Provider } from "react-redux";
import { store } from './redux/store'
import { Mosaic } from 'react-mosaic-component';

import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import FleetWindow from "./components/windows/FleetWindow/FleetWindow";
import MapWindow from "./components/windows/MapWindow/MapWindow";

import '../node_modules/react-mosaic-component/react-mosaic-component.css'
import './App.css'


const App = () => {
  const [visibleWindows, setVisibleWindows] = useState({
    fleetWindow: false,
    mapWindow: false
  });

  const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    a: <FleetWindow ships={[{name: 'yo momma', capacity: 100, fuel: 100}]}/>,
    b: <MapWindow /> ,
    c: <div>Bottom Right Window</div>,
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Mosaic<string>
          renderTile={(id) => ELEMENT_MAP[id]}
          initialValue={{
            direction: 'row',
            first: 'a',
            second: {
              direction: 'column',
              first: 'b',
              second: 'c',
            },
            splitPercentage: 40,
          }}
        />
      </div>
    </Provider>
  );
};

export default App;

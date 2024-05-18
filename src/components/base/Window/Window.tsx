import React from 'react';
import { MosaicBranch, MosaicWindow, MosaicWindowActions } from 'react-mosaic-component';

import { Classes } from '@blueprintjs/core';
import classNames from 'classnames';

export interface MosaicWindowContext {
    blueprintNamespace: string;
    mosaicWindowActions: MosaicWindowActions;
}

export class CloseAdditionalControlsButton extends React.PureComponent {
  context!: MosaicWindowContext;

  render() {
    return (
      <div className={classNames(Classes.BUTTON_GROUP, Classes.MINIMAL)}>
        <button
          onClick={() => this.context.mosaicWindowActions.setAdditionalControlsOpen(false)}
          className={Classes.BUTTON}
        >
          Proof of Concept Button!
        </button>
      </div>
    );
  }
}

interface ExampleWindowProps {
    count: number;
    path: MosaicBranch[];
    totalWindowCount: number;
  }
  
const additionalControls = React.Children.toArray([<CloseAdditionalControlsButton />]); 

const Window = ({ count, path, totalWindowCount }: ExampleWindowProps) => {
    const adContainer = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (adContainer.current == null) {
        return;
        }

        const script = document.createElement('script');

        script.src = '//cdn.carbonads.com/carbon.js?serve=CEAIEK3E&placement=nomcoptergithubio';
        script.async = true;
        script.type = 'text/javascript';
        script.id = '_carbonads_js';

        adContainer.current.appendChild(script);
    }, []);

    return (
        <MosaicWindow<number>
        additionalControls={count === 3 ? additionalControls : []}
        title={`Window ${count}`}
        createNode={() => totalWindowCount + 1}
        path={path}
        onDragStart={() => console.log('MosaicWindow.onDragStart')}
        onDragEnd={(type) => console.log('MosaicWindow.onDragEnd', type)}
        renderToolbar={count === 2 ? () => <div className="toolbar-example">Custom Toolbar</div> : null}
        >
            <div className="example-window">
                <h1>{`Window ${count}`}</h1>
                {count === 3 && <div className="ad-container" ref={adContainer} />}
            </div>
        </MosaicWindow>
    );
};

export default Window;
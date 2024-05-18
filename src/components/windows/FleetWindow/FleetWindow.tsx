import Window from "../../base/Window/Window";
import { Ship } from "../../../types/ShipTypes";
import ShipTile from "../../base/ShipTile/ShipTile"
import { MosaicWindow } from "react-mosaic-component";

interface FleetWindowProps {
    ships: Ship[];
};

const FleetWindow = ({ships}: FleetWindowProps) => {

    return <Window
        count={1}
        totalWindowCount={1}
        path={['first']}
    >
    </Window>
}

export default FleetWindow;
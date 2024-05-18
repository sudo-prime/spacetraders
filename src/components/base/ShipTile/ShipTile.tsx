import React, {useState} from "react";
import { Ship } from "../../../types/ShipTypes";
import ShipDetailsWindow from "../../windows/ShipDetailsWindow/ShipDetailsWindow";

interface ShipTileProps {
    ship: Ship
};

const ShipTile = ({
    ship
}: ShipTileProps) => {
    const [detailsVisible, setDetailsVisible] = useState(false);
    return <li>
        {ship.name}, {100}, {100}
        <button onClick={() => setDetailsVisible(!detailsVisible)}>Details</button>
        <ShipDetailsWindow ship={ship}></ShipDetailsWindow>
    </li>
}

export default ShipTile;
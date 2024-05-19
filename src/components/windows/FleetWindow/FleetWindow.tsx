import { Ship } from "../../../types/ShipTypes";

interface FleetWindowProps {
    ships: Ship[];
};

const FleetWindow = ({ships}: FleetWindowProps) => {

    return <ul>
        {ships.map((ship: Ship) => {
            return <li>
                {ship.name}
                <button>Details</button>
            </li>
        })}
    </ul>
}

export default FleetWindow;
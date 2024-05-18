import { Ship } from "../../../types/ShipTypes";

interface ShipDetailsWindowProps {
    ship: Ship;
};

const ShipDetailsWindow = ({ship}: ShipDetailsWindowProps) => {
    return <div>
        <h1><b>{ship.name}</b></h1><hr />
        <h3>Fuel: {ship.fuel ?? 0}/100</h3>
        <h3>Capacity: {ship.capacity ?? 0}/100</h3>
    </div>
}

export default ShipDetailsWindow;
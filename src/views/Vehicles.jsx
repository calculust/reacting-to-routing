import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/vehicles')
        .then(response => response.json())
        .then(allVehicles => setVehicles(allVehicles))
        .catch(e => {
            console.log(e);
        })
    }, []);

    if (!vehicles.length) return <></>;

    return (
        <div>
            <h1 className="mb-3">Vehicles ({vehicles.length})</h1>
            <div className="row g-3">
                {vehicles.map(vehicle => {
                    let details_link = `/vehicles/${vehicle.id}/details`;

                    return (
                        <div key={vehicle.id} className="col-md-3">
                            <Card className="h-100 shadow-sm rounded-3">
                                <Card.Body>
                                    <Card.Title>{vehicle.name}</Card.Title>
                                    <Card.Text>
                                        <small><NavLink to={details_link}>View Details</NavLink></small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Vehicles
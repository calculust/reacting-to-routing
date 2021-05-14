import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const VehicleDetail = () => {
    const { vehicleid } = useParams();
    const [vehicle, setVehicle] = useState(false);
    const [pilot, setPilot] = useState(false);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/vehicles/${vehicleid}`)
        .then(response => response.json())
        .then(data => setVehicle(data))
        .catch(e => {
            console.log(e);
        })
        
    },[vehicleid]);

    useEffect(() => {
        if(vehicle.pilot) {
            fetch(vehicle.pilot)
            .then(response => response.json())
            .then(data => setPilot(data))
            .catch(e => {
                console.log(e);
            })
        }
    }, [vehicle]);

    if (!pilot) return <></>;

    return (
        <div>
            <h1>Vehicles: {vehicle.name}</h1>
            <div className="row g-3">
                <div key={vehicle.id} className="col-md-6">
                    <Card className="shadow-sm rounded-3">
                        <Card.Body>
                            <ListGroup variant="flush" className="mb-3">
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Vehicle Class</small> {vehicle.vehicle_class}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Length</small> {vehicle.length}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Pilot</small> {pilot.name}
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Text>
                                {vehicle.description}
                            </Card.Text>
                            <Card.Text>
                                <small><NavLink to="/vehicles">Back To Vehicles</NavLink></small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default VehicleDetail


import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const LocationDetail = () => {
    const { locationid } = useParams();
    const [location, setLocation] = useState(false);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
        .then(response => response.json())
        .then(data => setLocation(data))
        .catch(e => {
            console.log(e);
        })

        
    });

    if (!location) return <></>;

    return (
        <div>
            <h1>Locations: {location.name}</h1>
            <div className="row g-3">
                <div key={location.id} className="col-md-6">
                    <Card className="shadow-sm rounded-3">
                        <Card.Body>
                            <ListGroup variant="flush" className="mb-3">
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Climate</small> {location.climate}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Terrain</small> {location.terrain}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Surface Water</small> {location.surface_water}
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Text>
                                <small><NavLink to="/locations">Back To Locations</NavLink></small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default LocationDetail
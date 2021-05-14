import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/locations')
        .then(response => response.json())
        .then(allLocations => setLocations(allLocations))
        .catch(e => {
            console.log(e);
        })
    }, []);

    if (!locations.length) return <></>;

    return (
        <div>
            <h1 className="mb-3">Locations ({locations.length})</h1>
            <div className="row g-3">
                {locations.map(location => {
                    let details_link = `/locations/${location.id}/details`;

                    return (
                        <div key={location.id} className="col-md-3">
                            <Card className="h-100 shadow-sm rounded-3">
                                <Card.Body>
                                    <Card.Title>{location.name}</Card.Title>
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

export default Locations
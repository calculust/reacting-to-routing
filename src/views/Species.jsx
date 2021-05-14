import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Species = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/species')
        .then(response => response.json())
        .then(allSpecies => setSpecies(allSpecies))
        .catch(e => {
            console.log(e);
        })
    }, []);

    if (!species.length) return <></>;

    return (
        <div>
            <h1 className="mb-3">Species ({species.length})</h1>
            <div className="row g-3">
                {species.map(species => {
                    let details_link = `/species/${species.id}/details`;

                    return (
                        <div key={species.id} className="col-md-3">
                            <Card className="h-100 shadow-sm rounded-3">
                                <Card.Body>
                                    <Card.Title>{species.name}</Card.Title>
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

export default Species
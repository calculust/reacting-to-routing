import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const SpeciesDetail = () => {
    const { speciesid } = useParams();
    const [species, setSpecies] = useState(false);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/species/${speciesid}`)
        .then(response => response.json())
        .then(data => setSpecies(data))
        .catch(e => {
            console.log(e);
        })

        
    });

    if (!species) return <></>;

    return (
        <div>
            <h1>Species: {species.name}</h1>
            <div className="row g-3">
                <div key={species.id} className="col-md-6">
                    <Card className="shadow-sm rounded-3">
                        <Card.Body>
                            <ListGroup variant="flush" className="mb-3">
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Classification</small> {species.classification}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Eye Colors</small> {species.eye_colors}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Hair Colors</small> {species.hair_colors}
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Text>
                                <small><NavLink to="/species">Back To species</NavLink></small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SpeciesDetail
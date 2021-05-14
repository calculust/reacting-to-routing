import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const PeopleDetail = () => {
    const { peopleid } = useParams();
    const [people, setPeople] = useState(false);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
        .then(response => response.json())
        .then(data => setPeople(data))
        .catch(e => {
            console.log(e);
        })

        
    });

    if (!people) return <></>;

    return (
        <div>
            <h1>People: {people.name}</h1>
            <div className="row g-3">
                <div key={people.id} className="col-md-6">
                    <Card className="shadow-sm rounded-3">
                        <Card.Body>
                            <ListGroup variant="flush" className="mb-3">
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Gender</small> {people.gender}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Age</small> {people.age}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Eye Color</small> {people.eye_color}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Hair Color</small> {people.hair_color}
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Text>
                                {people.description}
                            </Card.Text>
                            <Card.Text>
                                <small><NavLink to="/people">Back To People</NavLink></small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PeopleDetail
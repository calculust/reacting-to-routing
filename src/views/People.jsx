import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(response => response.json())
        .then(allPeople => setPeople(allPeople))
        .catch(e => {
            console.log(e);
        })
    }, []);

    if (!people.length) return <></>;

    return (
        <div>
            <h1 className="mb-3">People ({people.length})</h1>
            <div className="row g-3">
                {people.map(person => {
                    let details_link = `/people/${person.id}/details`;

                    return (
                        <div key={person.id} className="col-md-3">
                            <Card className="h-100 shadow-sm rounded-3">
                                <Card.Body>
                                    <Card.Title>{person.name}</Card.Title>
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

export default People
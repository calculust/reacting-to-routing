import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(allFilms => setFilms(allFilms))
        .catch(e => {
            console.log(e);
        })
    }, []);

    if (!films.length) return <></>;

    return (
        <div>
            <h1 className="mb-3">Films ({films.length})</h1>
            <div className="row g-3">
                {films.map(film => {
                    let details_link = `/films/${film.id}/details`;

                    return (
                        <div key={film.id} className="col-md-6">
                            <Card className="h-100 shadow-sm rounded-3">
                                <Card.Body>
                                    <Card.Title>{film.title}</Card.Title>
                                    <Card.Text>
                                        {film.description.replace(/^(.{150}[^\s]*).*/, "$1") + '...'}
                                    </Card.Text>
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

export default Films


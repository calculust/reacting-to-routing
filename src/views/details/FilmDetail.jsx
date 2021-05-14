import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const FilmDetail = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState(false);
    const [rt_score, set_rt_score] = useState(false);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
        .then(response => response.json())
        .then(data => setFilm(data))
        .then(() => {
            if (film.rt_score > 79) set_rt_score(<span className="text-success">{film.rt_score}</span>);
            else set_rt_score(<span className="text-danger">{film.rt_score}</span>);
        })
        .catch(e => {
            console.log(e);
        })

        
    });

    if (!film || !rt_score) return <></>;

    return (
        <div>
            <h1>Films: {film.title}</h1>
            <div className="row g-3">
                <div key={film.id} className="col-md-6">
                    <Card className="shadow-sm rounded-3">
                        <Card.Body>
                            <ListGroup variant="flush" className="mb-3">
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Produced by</small> {film.producer}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Directed by</small> {film.director}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Released in</small> {film.release_date}
                                </ListGroup.Item>
                                <ListGroup.Item className="px-0">
                                    <small className="text-muted">Rotten Tomato Score</small> {rt_score}
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Text>
                                {film.description}
                            </Card.Text>
                            <Card.Text>
                                <small><NavLink to="/films">Back To Films</NavLink></small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FilmDetail


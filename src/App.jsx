import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navigation from './components/Navigation';
import { Home, Films, People, Locations, Species, Vehicles } from './views';
import { FilmDetail, PeopleDetail, LocationDetail, SpeciesDetail, VehicleDetail } from './views/details';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Container className="pb-5">
                <Switch>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmid/details">
                        <FilmDetail />
                    </Route>
                    <Route exact path="/people">
                        <People />
                    </Route>
                    <Route exact path="/people/:peopleid/details">
                        <PeopleDetail />
                    </Route>
                    <Route exact path="/locations">
                        <Locations />
                    </Route>
                    <Route exact path="/locations/:locationid/details">
                        <LocationDetail />
                    </Route>
                    <Route exact path="/species">
                        <Species />
                    </Route>
                    <Route exact path="/species/:speciesid/details">
                        <SpeciesDetail />
                    </Route>
                    <Route exact path="/vehicles">
                        <Vehicles />
                    </Route>
                    <Route exact path="/vehicles/:vehicleid/details">
                        <VehicleDetail />
                    </Route>
                    <Route path="*">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App

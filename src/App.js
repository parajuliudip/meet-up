import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritePage from './pages/Favourite';


function App() {
  return <div>
    <Switch>
      <Route path='/' exact={true}>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favourites'>
        <FavouritePage />
      </Route>
    </Switch>
  </div>;
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Content from './components/Content'
import HomeComponent from './components/HomeComponent';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/directory">
            <Content />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

const UnderConstrucction = styled.div`
  color: #cd8825;
`
const Logo = styled.div`
  img{
    width: 200px;
  }
`
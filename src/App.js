import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/img/princesshotel.png'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/directory">
            <Content />
          </Route>
          <Route path="/">
            <div className="container d-flex align-items-center flex-column">
              <Logo className="mt-5">
                <img src={logo} />
              </Logo>
              <UnderConstrucction className="display-2 mt-5">
                Coming Soon.
              </UnderConstrucction>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
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
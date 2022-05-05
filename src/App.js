import Pages from './pages/Pages'
import Category from './components/Category';
import {BrowserRouter} from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to={"/"} >The Perfecto Cuisine</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justifiy-content: center;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }
`;

export default App;

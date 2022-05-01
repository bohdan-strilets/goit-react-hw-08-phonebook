import { List, Item, Link } from './Navigations.styled';

function Navigations() {
  return (
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>
        <Link to="/contacts">Contacts</Link>
      </Item>
    </List>
  );
}

export default Navigations;

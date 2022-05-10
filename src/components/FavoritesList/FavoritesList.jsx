import { useSelector } from 'react-redux';
import { getFavoritesList } from 'redux/contacts/contact-selectors';
import Contact from 'components/Contact/Contact';
import { List, Item } from './FavoritesList.styled';

function FavoritesList() {
  const { favorites } = useSelector(state => getFavoritesList(state));

  return (
    <List>
      {favorites.length > 0 &&
        favorites.map(({ id, name, number }) => (
          <Item key={id}>
            <Contact id={id} name={name} number={number} />
          </Item>
        ))}
    </List>
  );
}

export default FavoritesList;

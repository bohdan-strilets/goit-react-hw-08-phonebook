import Container from 'components/Container';
import FavoritesList from 'components/FavoritesList';
import Message from 'components/Message';
import { useSelector } from 'react-redux';
import { getFavoritesList } from 'redux/contacts/contact-selectors';

function FavoritePage() {
  const { favorites } = useSelector(state => getFavoritesList(state));

  return (
    <Container title="Favorites list">
      {favorites.length > 0 ? (
        <FavoritesList />
      ) : (
        <Message message="Favorites list is empty." />
      )}
    </Container>
  );
}

export default FavoritePage;

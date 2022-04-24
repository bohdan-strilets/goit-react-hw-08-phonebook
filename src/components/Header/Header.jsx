import { Title, TitleColor, Button, ButtonText } from './Header.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function Header() {
  return (
    <>
      <Title to="/">
        Phone<TitleColor>book</TitleColor>
      </Title>
      <Button to="/contacts/add">
        <ButtonText>Add new contact</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button>
    </>
  );
}

export default Header;

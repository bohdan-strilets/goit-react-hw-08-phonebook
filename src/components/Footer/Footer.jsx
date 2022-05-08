import Container from 'components/Container';
import { Wrapper, Copyright, IconBook } from './Footer.styled';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <IconBook />
        <Copyright>© Phonebook 2022 by BS</Copyright>
      </Wrapper>
    </Container>
  );
}

export default Footer;

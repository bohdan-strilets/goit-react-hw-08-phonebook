import { Wrapper } from './AppBar.styled';
import Container from 'components/Container';
import Logo from './Logo';
import Navigations from './Navigations';
import AuthNav from './AuthNav';
import UserBar from './UserBar';

function AppBar() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigations />
        <AuthNav />
        <UserBar />
      </Wrapper>
    </Container>
  );
}

export default AppBar;

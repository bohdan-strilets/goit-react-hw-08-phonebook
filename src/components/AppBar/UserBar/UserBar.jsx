import {
  Wrapper,
  UserIcon,
  TextWrapper,
  Text,
  UserName,
  Email,
  Button,
} from './UserBar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getName, getEmail } from 'redux/auth/auth-selecors';
import operations from 'redux/auth/auth-operations';

function UserBar() {
  const userName = useSelector(state => getName(state));
  const userEmail = useSelector(state => getEmail(state));

  const dispatch = useDispatch();

  const logout = () => dispatch(operations.logoutUser());

  return (
    <Wrapper>
      <UserIcon></UserIcon>
      <TextWrapper>
        <Text>
          Welcome, <UserName>{userName}</UserName>
        </Text>
        <Email>{userEmail}</Email>
      </TextWrapper>
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </Wrapper>
  );
}

export default UserBar;

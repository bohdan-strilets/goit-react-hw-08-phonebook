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
import { getName, getEmail } from 'redux/contact-selectors';
import { useLogoutUserMutation } from 'redux/auth-api';
import { clearUser } from 'redux/auth-slice';

function UserBar() {
  const userName = useSelector(state => getName(state));
  const userEmail = useSelector(state => getEmail(state));

  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const logout = async () => {
    await logoutUser();
    return dispatch(clearUser());
  };

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

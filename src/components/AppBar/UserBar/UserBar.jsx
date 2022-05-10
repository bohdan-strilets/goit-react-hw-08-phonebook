import {
  Wrapper,
  GroupWrapper,
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
import { useNavigate } from 'react-router-dom';

function UserBar() {
  const userName = useSelector(state => getName(state));
  const userEmail = useSelector(state => getEmail(state));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(operations.logoutUser());
    navigate('/');
  };

  return (
    <Wrapper>
      <GroupWrapper>
        <UserIcon />
        <TextWrapper>
          <Text>
            Welcome, <UserName>{userName}</UserName>
          </Text>
          <Email>{userEmail}</Email>
        </TextWrapper>
      </GroupWrapper>
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </Wrapper>
  );
}

export default UserBar;

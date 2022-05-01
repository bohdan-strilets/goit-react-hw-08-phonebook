import { Wrapper, UserIcon, Text, UserName, Button } from './UserBar.styled';

function UserBar() {
  return (
    <Wrapper>
      <UserIcon></UserIcon>
      <Text>
        Welcome, <UserName>userName</UserName>
      </Text>
      <Button type="button">Logout</Button>
    </Wrapper>
  );
}

export default UserBar;

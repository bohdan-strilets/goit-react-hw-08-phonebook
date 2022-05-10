import { Wrapper, Text } from './Message.styled';

function Message({ message }) {
  return (
    <Wrapper>
      <Text>{message}</Text>
    </Wrapper>
  );
}

export default Message;

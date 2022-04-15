import PropTypes from 'prop-types';
import { Wrapper, Text } from './Message.styled';

function Message({ text }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
}

Message.prototype = {
  text: PropTypes.string.isRequired,
};

export default Message;

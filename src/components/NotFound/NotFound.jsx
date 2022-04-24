import { Wrapper, Title, Text } from './NotFound.styled';
import propTypes from 'prop-types';

function NotFound({ data, status }) {
  return (
    <Wrapper>
      <Title>
        Sorry {status} {data} :(
      </Title>
      <Text>Try reloading the page.</Text>
    </Wrapper>
  );
}

NotFound.prototype = {
  data: propTypes.string,
  status: propTypes.number,
};

export default NotFound;

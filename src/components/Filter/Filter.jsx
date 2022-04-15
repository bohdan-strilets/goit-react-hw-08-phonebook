import PropTypes from 'prop-types';
import { Label, Text, Input } from './Filter.styled';

function Filter({ filter, changeFilter }) {
  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;

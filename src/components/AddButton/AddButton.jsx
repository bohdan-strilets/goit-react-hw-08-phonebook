import { Button, ButtonText } from './AddButton.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function AddButton() {
  return (
    <Button to="/contacts/add">
      <ButtonText>Add new contact</ButtonText>
      <BsFillPersonPlusFill size={20} />
    </Button>
  );
}

export default AddButton;

import { useEffect } from 'react';
import { updateContact } from '../../Redux/operations ';
import { useDispatch } from 'react-redux';
import {
  BackDrop,
  Div,
  FormUpdate,
  Input,
  Button,
  Title,
} from './Modal styled';

export const Modal = ({ onShow, id }) => {
  const dispatch = useDispatch();

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onShow();
    }
  };
  const submit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = {
      name: form.elements.name.value,
      number: form.elements.phone.value,
    };
    console.log(values);
    dispatch(updateContact(id, values));
    form.reset();
  };

  useEffect(() => {
    const onEscapeClick = e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        onShow();
      }
    };
    window.addEventListener('keydown', onEscapeClick);

    return () => window.removeEventListener('keydown', onEscapeClick);
  }, [onShow]);

  return (
    <BackDrop onClick={onClickBackdrop}>
      <Div>
        <Title>CHANGE CONTACT DATA</Title>
        <FormUpdate action="" onSubmit={submit}>
          <Input
            type="text"
            name="name"
            placeholder="Enter new name"
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder="Enter new phone"
            required
          />
          <Button type="submit">SAVE CHANGE</Button>
        </FormUpdate>
      </Div>
    </BackDrop>
  );
};

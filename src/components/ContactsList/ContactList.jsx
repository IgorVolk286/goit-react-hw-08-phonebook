import { selectVisibleContacts } from '../../Redux/Contactsslice';
import { useState } from 'react';
import {
  List,
  ListItem,
  Text,
  Button,
  Wrap,
  TitleContactList,
  ButtonC,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/operations ';
import { Modal } from './Modal';

export const ContactList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState('');

  const show = e => {
    setOpenModal(prev => !prev);
    setId(e.target.id);
    console.log(e.target.id);
  };

  const dispatch = useDispatch();
  const visibleContact = useSelector(selectVisibleContacts);

  return (
    <Wrap>
      {openModal && <Modal onShow={show} id={id} />}
      <TitleContactList> CONTACTS LIST </TitleContactList>
      <List>
        {visibleContact.map(({ name, id, number }) => {
          return (
            <ListItem key={id} id={id}>
              <>
                <Text> Name: {name} </Text> <br></br>
                <Text> Number: {number}</Text>
              </>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                DELETE
              </Button>
              <ButtonC type="button" onClick={show} id={id}>
                CHANGE
              </ButtonC>
            </ListItem>
          );
        })}
      </List>
    </Wrap>
  );
};

// екшн для редакс\\\

// const deleteCont = id => {
//   return {
//     type: 'contacts/deleteCont',
//     payload: id,
//   };
// };

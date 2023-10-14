import { selectVisibleContacts } from '../../Redux/Contactsslice';
import {
  List,
  ListItem,
  Text,
  Button,
  Wrap,
  TitleContactList,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/operations ';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContact = useSelector(selectVisibleContacts);

  return (
    <Wrap>
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
              {/* <Button type="button" onClick={() => dispatch(changeContact(id))}>
                CHANGE
              </Button> */}
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

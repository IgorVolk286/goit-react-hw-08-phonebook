import { logOut } from 'Redux/auth/operation';
import { selectUser } from '../../Redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Wrap, Title, ButtonLogOut } from './AboutUser styled';
export const AboutUser = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <Title> Welcome,{user.email}</Title>
      <ButtonLogOut type="submit" onClick={() => dispatch(logOut())}>
        LOGOUT
      </ButtonLogOut>
    </Wrap>
  );
};

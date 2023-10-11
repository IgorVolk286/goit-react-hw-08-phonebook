import { logOut } from 'Redux/auth/operation';
import { selectUser } from 'Redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const AboutUser = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>WELCOME,{name}</p>
      <button type="submit" onClick={() => dispatch(logOut())}>
        LOGOUT
      </button>
    </div>
  );
};

import { logOut } from 'Redux/auth/operation';
import { selectUser } from 'Redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const AboutUser = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <p> WELCOME,{user.name}</p> */}
      <button type="submit" onClick={() => dispatch(logOut())}>
        LOGOUT
      </button>
    </div>
  );
};

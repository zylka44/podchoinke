import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateOffset } from '../../core/features/signin/signin';
import { RootState } from '../../core/store';

const Home = () => {
  const dispatch = useDispatch();
  const { offset } = useSelector((state: RootState) => state.signin);
  const [signinInfo, setSigninInfo] = useState('hej');

  const onButtonClick = (message: string): void => {
    dispatch(updateOffset(message === 'zalogowany'));
  };

  return (
    <>
      <h1>HOME</h1>
      <button onClick={() => onButtonClick('zalogowany')}>zalogowany</button>
      <button onClick={() => onButtonClick('nie zalogowany')}>nie zalogowany</button>
      <Link to="/dashboard">dashboard</Link>
    </>
  );
};

export default Home;

import { useDispatch, useSelector } from 'react-redux';
import { updateOffset } from '../../core/features/signin/signin';
import { RootState } from '../../core/store';

const Home = () => {
  const dispatch = useDispatch();
  const { offset } = useSelector((state: RootState) => state.signin);

  const onButtonClick = (message: string): void => {
    dispatch(updateOffset(message === 'zalogowany'));
  };
  return (
    <>
      <h1>HOME</h1>
      <button onClick={() => onButtonClick('zalogowany')}>zalogowany</button>
      <button onClick={() => onButtonClick('nie zalogowany')}>nie zalogowany</button>
      <p>{offset ? 'zalogowany' : 'nie zalogowany'}</p>
    </>
  );
};

export default Home;

import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

const Dashboard = () => {
  const { offset } = useSelector((state: RootState) => state.signin);

  return (
    <>
      <h1>DASHBOARD</h1>
      <p>{offset ? 'zalogowany' : 'nie zalogowany'}</p>
    </>
  );
};

export default Dashboard;

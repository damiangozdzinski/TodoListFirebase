import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetLists } from '../store/lists/lists.actions';

const Home = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    console.log('fetch');
    await dispatch<any>(GetLists());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;

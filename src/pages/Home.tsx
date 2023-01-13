import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/templates/Header';
import Main from '../components/templates/Main';
import Sidebar from '../components/templates/Sidebar';
import { GetLists } from '../store/lists/lists.actions';

const Home = () => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(true);

  const fetchData = async () => {
    console.log('fetch');
    await dispatch<any>(GetLists());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-hidden w-screen h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Main />
    </div>
  );
};

export default Home;

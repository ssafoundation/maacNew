import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadJson } from '../../Store/demo/demoSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => ({
    data: state.demo.data,
    loading: state.demo.loading,
  }));
  console.log(`Counter ~ login`, loading);
  useEffect(() => {
    dispatch(loadJson());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <div>
        <h1>Home</h1>
        {loading
          ? 'loading....'
          : data?.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
              </div>
            ))}
      </div>
    </React.Fragment>
  );
};

export default Home;

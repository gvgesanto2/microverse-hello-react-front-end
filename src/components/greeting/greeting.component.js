import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../../redux/greeting/greeting.reducer';

export default function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  return (
    <>
      <h1>Greeting</h1>
      <p>{greeting}</p>
    </>
  );
}

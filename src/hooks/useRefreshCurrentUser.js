import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import { getIsRefreshing } from 'redux/auth/auth-selecors';

function useRefreshCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  const isRefreshing = useSelector(state => getIsRefreshing(state));
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentUser(dispatch(operations.getCurrentUser()));
  }, [dispatch]);

  return { currentUser, isRefreshing };
}

export default useRefreshCurrentUser;

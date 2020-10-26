import { useCallback, useState } from 'react';

export const useLoginSubmit = (name, password, navigation) => {
  const [errorMessages, setErrorMessages] = useState({ name: '', password: '' });
  const handleOnPressLogin = useCallback(
    () => {
      const errors = {
        name: name ? '' : 'Name is Required',
        password: password ? '' : 'Password is Required',
      };
      setErrorMessages(errors);

      if (name && password) {
        navigation.navigate('Home');
      }
    },
    [name, password, navigation],
  );
  return {
    errorMessages,
    handleOnPressLogin,
  };
};

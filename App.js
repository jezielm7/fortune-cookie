import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages';

const fortuneCookie = () => {
  return (
    <>
      <StatusBar backgroundColor="#282a40" />
      <Home />
    </>
  );
}

export default fortuneCookie;
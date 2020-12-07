import React from 'react';
import { Header } from './Header';
import { Body } from './Body';

export const Calendar = () => {
  return (
    <div>
      <table width="100%">
        <Header />
        <Body />
      </table>
    </div>
  );
};

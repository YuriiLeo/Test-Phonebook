import React from 'react';
import users from './users.json';
import { CardList } from './components/CardList';

export const App = () => {
  return <CardList users={users} />;
};

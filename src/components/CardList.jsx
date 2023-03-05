import React from 'react';
import { Card } from './Card';
import { Container, UserCardList } from './CardList.styled';

export const CardList = ({ users }) => {
  return (
    <Container>
      <UserCardList>
        {users.map(({ id, tweets, followers, avatar }) => (
          <Card
            key={id}
            id={id}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </UserCardList>
    </Container>
  );
};

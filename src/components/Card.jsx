import { useState, useEffect } from 'react';
import {
  UserCard,
  Logo,
  Picture,
  WrapAvatar,
  Avatar,
  WrapDescription,
  Tweets,
  Followers,
  Button,
  ButtonText,
} from './Card.styled';
import logo from '../images/logo.svg';
import picture from '../images/bg_picture.png';
import dummyAvatar from '../images/hansel.png';

export const Card = ({ id, tweets, followers, avatar }) => {
  const LS_KEY1 = `followersCount${id}`;
  const LS_KEY2 = `stateButton${id}`;

  const [counter, setCounter] = useState(
    () => JSON.parse(window.localStorage.getItem(LS_KEY1)) ?? followers
  );
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(LS_KEY2)) ?? true
  );

  const handleClick = () => {
    setState(state => !state);
    setCounter(counter => (state ? counter + 1 : counter - 1));
  };

  const formatDisplayString = str => {
    const leftPart = str.toString().split('').slice(0, 3).join('').split();
    const rightPart = str.toString().split('').slice(3).join('').split();
    return leftPart.concat(rightPart).join();
  };

  useEffect(() => {
    window.localStorage.setItem(LS_KEY1, JSON.stringify(counter));
    window.localStorage.setItem(LS_KEY2, JSON.stringify(state));
  }, [state, counter, LS_KEY1, LS_KEY2]);

  return (
    <UserCard>
      <Logo src={logo} alt="logo" aria-label="Go iT" />
      <Picture src={picture} alt="background" />
      <WrapAvatar>
        <Avatar
          src={avatar ? avatar : dummyAvatar}
          alt="avatar"
          aria-label="User avatar"
        />
      </WrapAvatar>
      <WrapDescription>
        <Tweets>{tweets} tweets</Tweets>
        <Followers>{formatDisplayString(counter)} followers</Followers>
        <Button onClick={handleClick} type="button" color={state.toString()}>
          <ButtonText>{state ? 'Follow' : 'Following'}</ButtonText>
        </Button>
      </WrapDescription>
    </UserCard>
  );
};

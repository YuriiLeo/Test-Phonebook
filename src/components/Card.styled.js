import styled from 'styled-components';
import circle from '../images/Ellipse.png';

export const UserCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 36px;
  padding-top: 20px;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  &::before {
    content: '';
    position: absolute;
    top: 214px;
    left: 0;
    display: block;
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Logo = styled.img`
  align-self: flex-start;
  padding-left: 20px;
`;

export const Picture = styled.img`
  position: absolute;
  top: 28px;
  left: 0;
  padding-left: 36px;
  padding-right: 36px;
`;

export const WrapAvatar = styled.div`
  position: absolute;
  top: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #5736a3;
  border-radius: 50%;
  overflow: hidden;

  &::before {
    content: 'x';
    position: absolute;
    top: 0px;
    left: 0px;
    display: block;
    width: 80px;
    height: 80px;
    background-image: url(${circle});
    background-position: top;
    background-repeat: no-repeat;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 63px;
  height: auto;
`;

export const WrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #ebd8ff;
  text-transform: uppercase;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #ebd8ff;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 14px;
  padding-top: 14px;
  padding-left: 28px;
  padding-right: 28px;
  min-width: 196px;
  background: ${({ color }) => (color === 'true' ? '#ebd8ff' : '#5CD3A8')};
  border-radius: 10.3108px;
  border-style: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

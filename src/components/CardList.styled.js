import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 1240px;
`;

export const UserCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  grid-gap: 30px;
`;

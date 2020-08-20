import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 144px;
  background: #28262e;

  display: flex;
  align-items: center;
  padding: 0 calc(100% - 1120px);

  svg {
    color: #999591;
    height: 24px;
    width: 24px;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  margin: -176px auto 0;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  position: relative;
  width: 186px;
  margin: 0 auto 32px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    height: 48px;
    width: 48px;
    background-color: #ff9000;
    border-radius: 50%;
    border: none;
    right: 0;
    bottom: 0;
    transition: background-color 0.2s;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }

    input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
  }
`;

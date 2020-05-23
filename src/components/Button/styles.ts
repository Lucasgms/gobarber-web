import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  padding: 0 16px;
  margin-top: 16px;
  width: 100%;
  height: 56px;
  background-color: #ff9000;
  border-radius: 10px;
  border: none;
  color: #312e38;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;

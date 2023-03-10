import styled from 'styled-components';
export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 8px;
  border: 1px solid teal;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 3px;
  display: flex;

  margin-left: auto;

  border: none;
  border-radius: 10px;
  color: #ffffff;
  line-height: 1.2;
  background-color: teal;
  cursor: pointer;
  :focus,
  :hover {
    background-color: tomato;
    transform: scale(1.1);
  }
`;

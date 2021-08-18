import React from 'react';
import styled from 'styled-components';
import { TodoTypes } from '../../types';

const Td = styled.td`
  border: 1px solid;
`;

const Th = styled.th`
  border: 1px solid;
`;

export const Todo = ({ todo }) => (
  <>
    <Th scope="row">{todo.id}</Th>
    <Td>{todo.title}</Td>
    <Td>{todo.completed ? 'Completed!' : 'Not completed!'}</Td>
    <Td>{todo.user}</Td>
  </>
)

Todo.propTypes = {
  todo: TodoTypes.isRequired,
};

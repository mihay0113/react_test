import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Todo } from '../Todo/Todo';
import { TodoTypes } from '../../types';

const Table = styled.table`
  table-layout: fixed;
  border: 2px solid;
  border-collapse: collapse;
  width: 100%;
  margin-top: 36px;
  background-color: #98FB98;
  -webkit-box-shadow: 4px 57px 41px 28px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 57px 41px 28px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 57px 41px 28px rgba(34, 60, 80, 0.2);
`;

const Th1 = styled.th`
  width: 10%;
  border: 2px solid;
`;

const Th2 = styled.th`
  width: 40%;
  border: 2px solid;
`;

const Th3 = styled.th`
  width: 20%;
  border: 2px solid;
`;

const Th4 = styled.th`
  width: 30%;
  border: 2px solid;
`;

const Tr = styled.tr`
  transition: background-color 0.3s;

  &:hover {
    background-color: #32CD32;
  }
`;

export const TodoList = ({ prepared }) => (
  <Table>
    <thead>
      <tr>
        <Th1 scope="col">Id</Th1>
        <Th2 scope="col">Title</Th2>
        <Th3 scope="col">Completed</Th3>
        <Th4 scope="col">User</Th4>
      </tr>
    </thead>
    <tbody>
      {prepared.map(todo => (
        <Tr key={todo.id}>
          <Todo todo={todo} />
        </Tr>
      ))}
    </tbody>
  </Table>
);

TodoList.propTypes = {
  prepared: PropTypes.arrayOf(TodoTypes).isRequired,
};

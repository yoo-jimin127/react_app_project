import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="운영체제 강의듣기" done={true} />
      <TodoItem text="프로토타입 디자인하기" done={true} />
      <TodoItem text="인공지능 강의듣기" done={false} />
      <TodoItem text="앱프로그래밍 및 실습 과제하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
const mockedTodos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true,
  },
  {
    userId: 2,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
];

const mockedTodo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

const mockedUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
};

const mockedLoading = {
  isLoadingUser: false,
  isLoadingTodos: false,
  endPoint: '',
};

export { mockedTodos, mockedTodo, mockedUser, mockedLoading };

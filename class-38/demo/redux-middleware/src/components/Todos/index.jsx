import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../../store/todos';
import { Container, Typography } from '@mui/material';

function Todos() {

  const dispatch = useDispatch();
  let results = useSelector(state => state.todos.results);
  let count = useSelector(state => state.todos.count);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant='h2'>
        Count: {count}
      </Typography>
      {results.map(todo => (
        <Typography>
          {JSON.stringify(todo)}
        </Typography>
      ))}
    </Container>
  )
}

export default Todos;

import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

function VoteForm() {

  const candidates = useSelector(currentState => currentState.candidates);
  const dispatch = useDispatch(); // React component hook,

  const handleClick = (name) => {
    dispatch({
      type: 'INCREMENT_VOTE',
      payload: name
    });
  }

  return (
    <Grid id="vote-form" container justifyContent="center" spacing={4}>
      {candidates.map((candidate, i) => {
        return (
          <Grid item>
            <Card key={i} sx={{ minWidth: 100 }}>
              <CardContent>
                <Typography>{candidate.name}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => handleClick(candidate.name)}>Vote</Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default VoteForm;


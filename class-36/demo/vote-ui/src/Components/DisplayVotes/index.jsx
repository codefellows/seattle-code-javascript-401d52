import { useSelector } from 'react-redux';

function DisplayVotes() {

  let totalVotes = useSelector((currentState) => currentState.totalVotes);
  let candidates = useSelector((currentState) => currentState.candidates);
  let currentState = useSelector(currentState => currentState);

  let currentLeader = candidates.reduce((acc, candidate) => {
    if (candidate.votes > acc.votes ) {
      return candidate;
    }
    return acc
  }, {name: 'No Leader', votes: 0});
  console.log('OUR CURRENT STORE VALUES', currentState);
  return (
    <div>
      <h2>Vote Results</h2>
      <p>Current Winner: {currentLeader.name}</p>
      <p>Total Votes: {totalVotes}</p>
    </div>
  )

}

export default DisplayVotes;

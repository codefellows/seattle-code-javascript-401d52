import ListItem from '../ListItem';
import './list.scss';

function List({data}) {

  return (
    <ul className="my-list">
      <h2>My List</h2>
      {
        data.map((string, idx) => {
          return <ListItem listText={string} key={idx}/>
        })
      }
    </ul>
  );

}

export default List;

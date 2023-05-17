import { useContext } from 'react';
import { AuthContext } from '../Context/auth';
import Auth from '../Context/auth/Auth';

function List() {

  // reaching up into our cloud
  let { isLoggedIn, can, user } = useContext(AuthContext);

  console.log(can('read'));
  console.log('Are we logged in??', isLoggedIn);
  console.log('Who is the current user', user);

  return (
    <div>
      <p>My Awesome List</p>
      <Auth capability='read'>
        <p>Congrats You can read.</p>
      </Auth>
      <Auth capability='delete'>
        <p>Congrats you can delete!!</p>
      </Auth>
      {/* {can('create') ? <p>Congrats You can write.</p> : <p>Ugh oh, can't do that</p>} */}
    </div>
  )

}

export default List;

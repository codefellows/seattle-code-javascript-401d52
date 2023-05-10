import {useEffect} from 'react';


function Header({ name, phone }) {
  //  on Mount + name change, phone change
  useEffect(() => {
    console.log('Header update has occurred');
  }, [name, phone]);

  return (
    <div id="app-header">
      <p>
        {name}
      </p>
      <p>
        {phone}
      </p>
    </div>
  )
}

export default Header;

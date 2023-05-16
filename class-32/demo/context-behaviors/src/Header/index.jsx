import {useContext} from 'react';
import { SettingsContext } from '../context/settings';

function Header() {

  const {settings, updateHandle, updateTitle} = useContext(SettingsContext);

  return (
    <div>
      <h1>{settings.title}</h1>
      <nav>
        <a href="#">{settings.url}</a><br></br>
        <a href="#">{settings.handle}</a>
      </nav>
      <button onClick={(e) => updateTitle('you clicked me')}>Change Title</button>
    </div>
  )
}

export default Header;

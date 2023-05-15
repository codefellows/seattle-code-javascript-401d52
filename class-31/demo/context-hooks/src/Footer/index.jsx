import { SettingsContext } from '../context/settings';
import { ThemeContext } from '../context/theme';
import { useContext } from 'react';

// class Footer extends Component {

//   static context = ThemeContext;


// }

function Footer() {

  const settings = useContext(SettingsContext);
  // const theme = useContext(ThemeContext);
  // console.log(settings, theme);
  return(
    <ThemeContext.Consumer>
      {theme => {
        return (
          <div>
            <p>{settings.url}</p>
            <p>{theme.mode}</p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

}

export default Footer;

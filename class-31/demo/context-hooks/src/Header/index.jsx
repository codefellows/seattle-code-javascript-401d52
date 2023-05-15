import { ThemeContext } from '../context/theme';
import { useContext } from 'react';
import { Button, Container, Title } from '@mantine/core';
import './header.scss';

function Header() {

  const theme = useContext(ThemeContext);
  // console.log(theme);

  return (
    <Container id="app-header" className={theme.mode} px={100}>
      <Title>My Awesome App!!</Title>
      <Button onClick={theme.toggleMode}>Toggle Mode</Button>
    </Container>
  )
}

export default Header;

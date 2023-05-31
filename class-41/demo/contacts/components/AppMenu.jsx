import {Box} from 'native-base';
import { StyleSheet } from 'react-native';

function AppMenu() {
  return (
    <Box bg="violet.600" h="400" w="100%" style={styles.menu}>
      MENU GOES HERE
    </Box>
  )
}

const styles = StyleSheet.create({
  menu: {
    zIndex: 100,
    position: 'absolute',
    top: -250
  }
});

export default AppMenu;

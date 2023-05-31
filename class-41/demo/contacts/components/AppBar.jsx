import { Box, HStack, IconButton, Text, Icon} from 'native-base';
import {StyleSheet} from 'react-native';

function AppBar({ title }) {
  return (
    <Box bg="violet.600" px="1" py="3" justifyContent="center" alignItems="center" w="100%" height="100" style={styles.box}>
      <HStack alignItems="center">
        <IconButton icon={<Icon size="sm" name="menu" color="white" />} />
        <Text color="white" fontSize="20" fontWeight="bold">
          {title}
        </Text>
      </HStack>
    </Box>
  )
}

let styles = StyleSheet.create({
  box: {
    zIndex: 10000,
  }
});

export default AppBar;

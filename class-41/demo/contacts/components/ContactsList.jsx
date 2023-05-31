import { Pressable, Badge, HStack, VStack, Text, Spacer } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';

function ContactsList({ contacts, handlePress }) {

  const renderListItem = ({ item }) => {
    console.log('CONTACT LIST ITEM VALUES:', item);
    return (
      <Pressable onPress={handlePress} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" w="100%">
        <HStack alignItems="center">
          <Badge colorScheme="darkBlue" w="20" h="20" _text={{
            color: "white"
          }} variant="solid" rounded="4">
            ICON GOES HERE
          </Badge>
          <Spacer />
          <VStack>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumbers[0].number}</Text>
          </VStack>
          <Spacer />
          <Badge colorScheme="darkBlue" w="20" h="20" _text={{
            color: "white"
          }} variant="solid" rounded="4">
            PHONE ICON GOES HERE
          </Badge>
        </HStack>
      </Pressable>
    )
  }

  return (
    <FlatList
      style={styles.list}
      data={contacts}
      renderItem={renderListItem}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    maxHeight: '80%',
    width: '100%',
    zIndex: 1,
  }
})

export default ContactsList;

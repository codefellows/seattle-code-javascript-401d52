import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
// feature linking we can hook into
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contacts, setContacts] = useState([
    { name: 'Jacob', id: 1 },
    { name: 'JB', id: 2 },
    { name: 'Sheyna', id: 3 }
  ]);

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].digits;
    console.log(phoneNumber);
    let link = `tel:${phoneNumber}`;

    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    async function getContacts() {

      const { status } = await Contacts.requestPermissionsAsync();

      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();
        setContacts(data)
      }
    }

    getContacts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Contacts</Text>
      <FlatList
        style={styles.list}
        data={contacts}
        renderItem={({item}) => <Button title={item.name} onPress={() => call(item)}/>}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonBox}>
        <Button title="Add Contact" onPress={() => console.log('Button Clicked!')} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: 'blue',
    fontSize: 40,
    // backgroundColor: 'red'
  },
  list: {
    flex: 2,
    // backgroundColor: 'yellow'
  },
  buttonBox: {
    flex: 1,
  }
});

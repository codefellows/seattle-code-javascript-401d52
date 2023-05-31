import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, Linking } from 'react-native';
import { NativeBaseProvider } from "native-base";
import AppBar from './components/AppBar';
import ContactsList from './components/ContactsList';
import AppMenu from './components/AppMenu';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [contacts, setContacts] = useState([
    { name: 'Jacob', id: 1, phoneNumbers: [{ number: 1111111 }] },
    { name: 'JB', id: 2, phoneNumbers: [{ number: 1111111 }] },
    { name: 'Sheyna', id: 3, phoneNumbers: [{ number: 1111111 }] }
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
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        {/* Menu Goes Here */}
        <AppMenu />
        <AppBar title='My Contacts' />
        <ContactsList contacts={contacts}/>
        <View style={styles.buttonBox}>
          <Button title="Add Contact" onPress={() => console.log('Button Clicked!')} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBox: {
    flex: 1,
  }
});

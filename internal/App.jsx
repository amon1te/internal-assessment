import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import { useColorScheme } from 'nativewind';
import Crypto from './screens/crypto';
import Daily from './screens/daily';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  console.log(colorScheme);
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 300, paddingTop: 10}} source={require('./assets/my-images/sis-logo.png')}/>
      <Text style={styles.text}>Toggle Theme</Text>
      <Switch value={colorScheme=='dark'} onChange={toggleColorScheme}></Switch>
      <Crypto />
      <Daily />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    padding: 0
  },
  mainText: {
    color: '#FFFFFF',
    fontFamily: 'Helvetica',
  }, 
  text: {
    color: 'white'
  }
});

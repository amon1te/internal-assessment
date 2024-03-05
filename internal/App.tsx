import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BookListings from './screens/Booklistings';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 300, paddingTop: 10}} source={require('./assets/my-images/sis-logo.png')}/>
      <BookListings />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
  },
  mainText: {
    color: '#FFFFFF',
    fontFamily: 'Helvetica',
  }
});

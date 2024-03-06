import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const Crypto = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then(
        (result) => {
          setResponse(result);
          setIsLoading(false);
          console.log(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>
    }
    
    console.log(response);
    return <Text style={{color: 'white', height: '10', fontSize: 40 }}>Bitcoin (USD): {response["bpi"]["USD"].rate}$</Text>;
  };
  
  return (
    <View style={styles.container}>
      {getContent()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'none',
    alignItems: 'center',
    justifyContent: 'top',
    height: 3
  },
});

export default Crypto;
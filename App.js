import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.pinimg.com/736x/46/42/ae/4642ae51f2db25a5aa1641205a23a7bb.jpg' }} style={styles.logo} />
      <Text style={styles.instructions}>
        teste
      </Text>

      <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
        <Text style={styles.buttonText}>chuuye</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3274',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
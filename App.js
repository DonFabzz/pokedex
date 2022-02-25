import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';
import React, { useEffect, useState } from 'react';
import { getPokemons } from './api/api';

export default function App() {
  const consoleLog = (color) => {
    console.log(color);
  }

  const [text, setText] = useState('default');

  async function allpokemons(){
    let pokemon = await getPokemons()
    console.log(pokemon)
  }

  useEffect(()=>{
    allpokemons()
  })

  return (
    <View style={styles.container}>
      <CustomButton name="test" color="red" text={text} consoleLog={consoleLog} setText={setText} />
      <CustomButton name="testoui" color="blue" text={text} consoleLog={consoleLog} setText={setText}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

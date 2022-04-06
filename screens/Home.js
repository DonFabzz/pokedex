import React, { useEffect, useState } from 'react';
import { getPokemons } from '../api/api';
import TitlePokemon from '../components/TitlePokemon';
import { FlatList, Button, ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';


export default function Home({navigation}) {

    const [listpokemon, setListPokemon] = useState([])
    const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [isLoading, setIsLoading] = useState(true)

    const loadPokemon = (url) => {
        setIsLoading(true)
        getPokemons(url).then(datas => {
            setListPokemon([...listpokemon, ...datas.results])
            setNextPage(datas.next)
            setIsLoading(false)
            console.log(datas)
        })
    }

    useEffect(() => {
    loadPokemon(nextPage)
    }, []);

    return(
        <View style={styles.container}>
        <FlatList
            data = {listpokemon}
            style = {styles.liste}
            numColumns = {2}
            contentContainerStyle = {styles.suce}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => <TitlePokemon style={styles.listing} name={item.name} url={item.url} navigation={navigation}/>}
            onEndReached={() =>{
            loadPokemon(nextPage)
            }}
        />
        { isLoading
        ? <ActivityIndicator size="large" color="blue" />
        : null
        }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    },
    liste: {
      display:'flex',
    },
    suce:{
      display:'flex',
      justifyContent: 'center',
      flexGrow:1,
    }
  });
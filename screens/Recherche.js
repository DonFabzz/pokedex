import React, { useEffect, useState } from 'react';
import { getPokemons } from '../api/api';
import TitlePokemon from '../components/TitlePokemon';
import { FlatList, Button, ActivityIndicator, Image, StyleSheet, Text, View, TextInput } from 'react-native';


export default function Recherche({navigation}) {

    const [pokemon, setPokemon] = useState([]);
    const [loading, isLoading] = useState(true);
    const [url, setUrl] = useState(null);

    const searchPokemon = async(name) => {
    try {
        console.log(name)
        console.log("https://pokeapi.co/api/v2/pokemon/"+name.toLowerCase())
        getPokemons("https://pokeapi.co/api/v2/pokemon/"+name.toLowerCase()).then(datas => {
            setPokemon([datas]);
            console.log(datas);
            isLoading(false);
        })
    }
    catch(error){
        console.log('error');
    }
        
    }

    return(
        <View>
            <TextInput placeholder="Search" onChangeText={(text) => searchPokemon(text)}/>
            { loading
            ? <ActivityIndicator size="large" color="blue" />
            : <FlatList
                data = {pokemon}
                style = {styles.liste}
                numColumns = {2}
                contentContainerStyle = {styles.suce}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => <TitlePokemon style={styles.listing} name={item.name} url={"https://pokeapi.co/api/v2/pokemon/"+item.id} navigation={navigation}/>}
                />
            }
            
        </View>
    )
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
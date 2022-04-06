import {StyleSheet, Text, Image, View} from "react-native"
import React, { useState } from 'react';
import baseImage from "../assets/pokedex.jpg";
import { getPokemons } from "../api/api";
import { borderEndColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function TitlePokemon(props) {

    const { url, name, ...restProps} = props
    const [pokemonDatas, setPokemonDatas] = useState([])
    const [pokemonImage, setPokemonImage] = useState(null)

    if (pokemonDatas.length === 0) {
        getPokemons(url).then(data => {
            setPokemonImage(data.sprites)
        })
    }

  return (
    <View style={styles.card}>
        {pokemonImage
        ? <Image style={styles.img} source={{uri: pokemonImage.front_default}}/> 
        : <Image style={{ width: 100, height: 100 }} source={baseImage}/> 
        }
        <Text style={styles.tex}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
    tex: {
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center'

    },
    card:{
      width: '45%',
      height: 160,
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center'
      },
    img: {
      width:100,
      height:100,
      display: 'flex',
      justifyContent: 'center',
      margin:'auto'
    }
  });
  
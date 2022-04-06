import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from "react-native";

export default function TitlePokemon({route}) {
    const {name, image, type} = route.params;

    return (
        <View>
            <Image style={{ width: 250, height: 250, }} source={{uri: image}}/>
            <Text style={{justifyContent:'center'}}>{name}</Text>
            <Text>{type}</Text>
        </View>
    )


}
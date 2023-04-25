import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export const BotaoGrande = ({title, onPress = () => {}}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style = {{fontWeight: 'bold', fontSize: 20,}}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 90, 
        height: 55, 
        width: 330, 
        backgroundColor: '#F1DF00',
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 0.5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
  });
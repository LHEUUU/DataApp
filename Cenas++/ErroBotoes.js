import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';

export const ErroBotoes = ({visible = false,}) => {
    
    return (
        visible && (
            <View>    
                <Text style={styles.textoStyle}> Selecione um tipo de cesto </Text>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    textoStyle: {
        marginTop: 6,
        fontSize: 12,
        color:'#D80000',
    },
  });
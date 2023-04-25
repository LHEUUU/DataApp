import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Confirmadex = ({visible = false, iconName}) => {
    return (
        visible && (
            <View style={[styles.container]}>    
                <View style = {styles.popUp}>
                    <Text style={{marginRight: 10, fontSize: 18,}}> Dados confirmados!</Text>
                    <Icon name={iconName} style={{fontSize: 22, color: '#4BE549'}}/>
                </View> 
            </View>
        )
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110%',
        width: '100%'
    },
    popUp: {
        height: 70,
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
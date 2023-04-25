import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const GrupoBotoes = ({iconName, active, setActive}) => {

    return (
        <View style={styles.container}>   
            <TouchableOpacity onPress={()=>setActive(1)} style = {active == 1 ? styles.botaoA1 : styles.botao1}>
                <Text style = {{fontSize: 15,}}> 1 Pessoa</Text>
                <Icon name={iconName} style={{fontSize: 20, marginTop:3, color: '#1A378E'}}/> 
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActive(2)} style={active == 2 ? styles.botaoA2 : styles.botao2}>
                <Text style = {{fontSize: 15,}}> 2 Pessoas </Text>
                <Icon name={iconName} style={{fontSize: 20, marginTop:3, color: '#008002'}}/> 
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActive(3)} style={active == 3 ? styles.botaoA3 : styles.botao3}>
                <Text style = {{fontSize: 15,}}> 3 Pessoas </Text> 
                <Icon name={iconName} style={{fontSize: 20, marginTop:3, color: '#9E1303'}}/>   
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    botao1:{
        height: 55,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#83E3FF',
        borderWidth: 0.5,
        borderColor: 'black',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: 10,
    },
    botao2:{
        height: 55,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98FFB8',
        borderWidth: 0.5,
        borderColor: 'black',
        marginTop: 10,
    },
    botao3:{
        height: 55,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF9B99',
        borderWidth: 0.5,
        borderColor: 'black',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 10,
    },
    botaoA1:{
        height: 55,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#83E3FF',
        borderWidth: 3,
        borderColor: '#1A378E',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: 10,
    },
    botaoA2:{
        height: 55,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98FFB8',
        borderWidth: 3.3,
        borderColor: '#008002',
        marginTop: 10,
    },
    botaoA3:{
        height: 55,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF9B99',
        borderWidth: 3.3,
        borderColor: '#9E1303',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 10,
    }
})
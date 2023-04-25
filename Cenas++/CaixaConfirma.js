import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, TouchableOpacity} from 'react-native';

export const CaixaConfirma = ({visible = false, onPressS = () => {}, onPressN = () => {}, texto}) => {
    return (
        visible && (
            <View style={[styles.container]}> 
                <View style = {styles.popUp}>
                    <Text style={{fontSize: 18, fontWeight: '500'}}> Confirma os dados?</Text>
                    <View style={styles.caixaDados}>
                        <Text style={{fontSize: 15, padding: 5,}}> {texto}</Text>
                    </View>
                    <View style = {styles.caixinhaBotao}>
                        <TouchableOpacity onPress={onPressS} style={styles.botaoS}>
                            <Text style = {{fontSize: 16,}}> Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPressN} style={styles.botaoN}>
                            <Text style = {{fontSize: 16, fontWeight: 'bold'}}> Não </Text>
                        </TouchableOpacity>
                    </View>
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
        height: 210,
        width: 260,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    caixaDados: {
        marginTop: 10,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#4BE549',
        backgroundColor: '#FFFCF3',
    },
    caixinhaBotao: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    botaoS:{
        height: 55,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFCF3',
        borderWidth: 0.5,
        borderColor: 'black',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginTop: 10,
    },
    botaoN:{
        height: 55,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF9B99',
        borderWidth: 0.5,
        borderColor: 'black',
        marginTop: 10,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
  });
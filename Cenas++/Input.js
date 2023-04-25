import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Input = ({label, iconName, error, onFocus = () => {}, ...props}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
    <View style={{marginTop:40}}>
        <Text style = {styles.label} >{label}</Text>
        <View style ={[styles.inputContainer, {borderColor: error ? '#D80000': isFocused ? '#4BE549': '#000000'}, {borderWidth: error ? 1: isFocused ? 1: 0.5}]}>
            <Icon name={iconName} style={{fontSize: 20, color:'#695F17', marginRight:10}}/>
            
            <TextInput
                autoCorrect = {false}
                onFocus={()=>{
                    onFocus();
                    setIsFocused(true);
                }}

                onBlur={()=>{
                    setIsFocused(false);
                }}

                style={{color:'#695F17', flex: 1}} 
                {...props} 
            />
        </View>
        {error && (<Text style={{color:'#D80000', fontSize:12, marginTop: 6,}}> {error} </Text>)}        
    </View>
    );
};


const styles = StyleSheet.create({
    label: {
      marginVertical: 10,
      fontSize: 17,
    },
    inputContainer: {
        height: 55,
        width: 330,
        backgroundColor: '#FFFCF3',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
  });
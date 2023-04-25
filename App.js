import React, {useState, useEffect} from 'react';
import {Keyboard, StyleSheet, Text, SafeAreaView, Alert, TouchableWithoutFeedback} from 'react-native';

import { BotaoGrande } from './Cenas++/BotaoGrande';
import { Confirmadex } from './Cenas++/Confirmadex';
import { GrupoBotoes } from './Cenas++/GrupoBotoes';
import { Input } from './Cenas++/Input';
import { CaixaConfirma } from './Cenas++/CaixaConfirma';
import { ErroBotoes } from './Cenas++/ErroBotoes';

//firebase
import { doc, setDoc, addDoc, collection, ref, getDocs, updateDoc} from "firebase/firestore";
import { db } from './firebase'

export default function App() {

  const [inputs, setInputs] = React.useState({
    num1: '',
    num2: '',
  });

  const [errors, setErrors] = React.useState({});

  const [t1, setT1] = React.useState("");

  const [t2, setT2] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const [confirm, setConfirm] = React.useState(false);

  const [visivel, setVisivel] = React.useState(false);

  const [active, setActive] = React.useState(0);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.num1){
      handleError ('Introduza um número', 'num1');
      valid = false;
    }else if (inputs.num1 < 1){
      handleError ('Introduza um nº válido', 'num1');
      valid = false
    }else if (inputs.num1 > 150){
      handleError ('Introduza um nº válido', 'num1');
      valid = false
    }

    if (!inputs.num2){
      handleError ('Introduza um número', 'num2');
      valid = false;
    }else if (inputs.num2 < 1){
      handleError ('Introduza um nº válido', 'num2');
      valid = false
    }else if (inputs.num2 > 150){
      handleError ('Introduza um nº válido', 'num2');
      valid = false
    }else if (inputs.num2 == inputs.num1){
      handleError ('Introduza um nº diferente', 'num2');
      valid = false
    }

    if (active == 0){
      setVisivel(true);
      valid = false
    }

    if (valid) {
      confirmar();
      setVisivel(false);
    }
  };

  const confirmar = () => {
    setConfirm(true);
  };

  const desconfirmar = () => {
    setConfirm(false);
  };

  const dadosAceite = () => {
    setInputs("");
    setT1("");
    setT2("")
    setActive(0);
    setConfirm(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      //submit dos inputs
      try {
        addDoc(collection(db, "inputs"), {
          carreiro1: inputs.num1,
          carreiro2: inputs.num2,
          carro: active,
        });
        } catch (error) {
          Alert.alert("Erro", "Algo deu errado");
        }
        }, 1500);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input)  => {
    setErrors((prevState) => ({...prevState, [input]: errorMessage}));
  };
  
  var textoConfirm = "Carro:           " + active + "\n Carreiro 1:    " + inputs.num1 + "\n Carreiro 2:    " +  inputs.num2;

  let listaC1 = [];
  let listaC2 = [];
  let listaCarro = [];

  //reading the data
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "inputs"))
      querySnapshot.forEach((dado) => {
        listaC1.push(dado.data().carreiro1)
        listaC2.push(dado.data().carreiro2)
        listaCarro.push(dado.data().carro)
      })

      ////TRATAMENTO DE DADOS
      N = listaC1.length
      let numC = 150

      //Carros que cada carreiro fez, o dinheiro que recebe e o total de viagens
      const tratamento_dados = () => {
        let num_c1 = 0
        let num_c2 = 0
        let num_c3 = 0
        let viagens = 0
        let guitoDia = 0
        let D1 = 10
        let D2 = 10
        let D3 = 15
        for (let j = 1; j < numC + 1; j++) {
          for (let i = 0; i < N; i++){
            if (j == listaC1[i] || j == listaC2[i]){
              if (listaCarro[i] == 1){
                num_c1 += 1
                viagens += 1
                guitoDia += D1
              } else if (listaCarro[i] == 2){
                num_c2 += 1
                viagens += 1
                guitoDia += D2
              } else {
                num_c3 += 1
                viagens += 1
                guitoDia += D3
              }
            }
          }

          if (num_c1 != 0 || num_c2 != 0 || num_c3 != 0){
            //console.log(j, num_c1, num_c2, num_c3, guitoDia, '€', viagens)
            //submit data
            addDoc(collection(db, "resolved data"), {
              carreiro: j,
              total_viagens: viagens,
              viagens_carro1: num_c1,
              viagens_carro2: num_c2,
              viagens_carro3: num_c3,
              dinheiro: guitoDia,
            });
            num_c1 = 0
            num_c2 = 0
            num_c3 = 0
            guitoDia = 0
            viagens = 0
          }
        }
      };

      tratamento_dados();
    }
    fetchData()
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <CaixaConfirma 
          visible = {confirm}
          onPressS = {dadosAceite}
          onPressN = {desconfirmar}
          texto = {textoConfirm}
        />
        
        <Confirmadex 
          iconName = "check-decagram"
          visible = {loading}
        />
        
        <Text style={{fontSize: 17,}}>Qual o tipo de cesto?</Text>

        <GrupoBotoes
          iconName = "cards"
          active = {active}
          setActive = {setActive}
        />

        <ErroBotoes 
          visible = {visivel}
        />

        <Input
          keyboardType = "number-pad"
          placeholder = "Introduza o seu nº de carreiro"
          iconName = "redhat"
          label = "Primeiro carreiro:"
          error = {errors.num1}
          onFocus = {() => {
            handleError(null, 'num1');
          }}
          onChangeText = {(text) => {handleOnChange (text, "num1"); setT1(text)}}
          value={t1}
        />
        <Input 
          keyboardType = "number-pad"
          placeholder = "Introduza o seu nº de carreiro"
          iconName = "redhat"
          label = "Segundo carreiro:"
          error = {errors.num2}
          onFocus = {() => {
            handleError(null, 'num2');
          }}
          onChangeText = {(text) => {handleOnChange (text, "num2"); setT2(text)}}
          value={t2}
        />

        <BotaoGrande title="Submeter" onPress={[validate]}/>  

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
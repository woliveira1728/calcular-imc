import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import styles from "./style";


export  default function Form() {
    
const [heigth, setHeigth]=useState(null)
const [weigth, setWeigth]=useState(null)
const [messageImc, setMessageImc]=useState("Preencha o peso e altuta")
const [imc, setImc]=useState(null)
const [textButton, setTextButton]=useState("Calcular")

function imcCalculator(){
  return setImc((weigth/(heigth*heigth)).toFixed(2))
}

function validationImc(){
  if(weigth !=null && heigth !=null){
    imcCalculator()
    setWeigth(null)
    setHeigth(null)
    setMessageImc("Seu IMC é igual:")
    setTextButton("Calcular Novamente")
    return
  }
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("Preencha o peso e altura")
}
  
  return (
      <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
            style={styles.input}
            onChangeText={setHeigth}
            value={heigth}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
            />

            <Text style={styles.formLabel}>Peso</Text>
            <TextInput
            style={styles.input}
            onChangeText={setWeigth}
            value={weigth}
            placeholder="Ex: 75.252"
            keyboardType="numeric"
            />
         <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() =>
            validationImc()
          }
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
      </View>
    );
  }
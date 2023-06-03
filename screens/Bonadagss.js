import React, { useState } from "react";
import axios from "axios";
import {StyleSheet,Button,View,Text,TouchableOpacity,Alert,TextInput,ScrollView} from "react-native"

import { Formik } from "formik"
import { Calendar } from 'react-native-calendars';

export default function Bonadagss() {
  const [date,setDate]=useState('')
  return (
    <ScrollView style={{padding:5}}>
      <Formik
        initialValues={{RDate:date, Bonadavill: "", Sabalpura: "", Ola: "", Phedbonada: "" }}
        enableReinitialize
        onSubmit={(values,{resetForm}) => {

          Alert.alert(
            'DATA SAVED',
            'YOUR DATA HAS BEEN SAVED',
            [
              {
                text:'ok',
                onPress:()=>{
                  resetForm();
                }
              },
            ],
            {cancelable:false}
          );
          
          axios.post('https://wild-pink-kangaroo.cyclic.app/bonadagss',values)
          .then(response=>{

          })
          .catch(error=>{
            console.warn(error.response);
          });
        
        }}

        
       
      >
        {(props) => (
          <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <Calendar enableSwipeMonths={true}
            onDayPress={day => {
              setDate(day.dateString)
            
            }}/> 
            <View style={{ display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{margin:10}}> SELECTED DATE</Text>
            <TextInput 
            
            value={date}  style={{ borderColor: "gray",borderWidth: 1,width:150 ,padding:10,borderRadius:10,margin:5}}></TextInput>
            </View>
            <View style={{ display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Bonadavill :-</Text>
              <TextInput
                style={{ borderColor: "gray",borderWidth: 1,width:150 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Bonadavill")}
                value={props.values.Bonadavill}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Sabalpura :-</Text>

              <TextInput  
                style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Sabalpura")}
                value={props.values.Sabalpura}
                keyboardType="numeric"
              />
            </View>

            <View style={{  display: "flex", flexDirection: "row", padding:10,justifyContent:"center",alignItems:"center" }}>

              <Text style={{fontSize:15}}> Ola :-     </Text>

              <TextInput
                style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Ola")}
                value={props.values.Ola}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Phedbonada :-   </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Phedbonada")}
              value={props.values.Phedbonada}
              keyboardType="numeric"
            />
            </View>
            <View style={{borderRadius:200,overflow:'hidden',width:200,marginVertical:0,marginHorizontal:80}}>
            <Button title="Submit" onPress={props.handleSubmit} style={{}} />
            </View>          
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

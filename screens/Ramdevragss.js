import { Calendar } from 'react-native-calendars';
import React, { useState } from "react";
import axios from "axios";
import {StyleSheet,Button,View,Text,TouchableOpacity,Alert,TextInput,ScrollView} from "react-native"

import { Formik } from "formik"

export default function Ramdevragss() {
  const [date,setDate]=useState('')
  return (
    <ScrollView style={{padding:5}}>
      <Formik
        initialValues={{RDate:date, Loharki: "", Sujasar: "", Dudhiya: "", Naibasti: "" }}
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
          axios.post('https://wild-pink-kangaroo.cyclic.app/ramdevragss',values)
          .then(response=>{
            console.warn(response)
          })
          .catch(error=>{
            console.warn(error.response);
          });
        console.log({values})
        }}

        
       
      >
        {(props) => (
          <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <Calendar enableSwipeMonths={true}
            onDayPress={day => {
              setDate(day.dateString)
            console.log('selected day', day.dateString);
            }}/> 
            <View style={{ display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{margin:10}}> SELECTED DATE</Text>
            <TextInput 
            
            value={date}  style={{ borderColor: "gray",borderWidth: 1,width:200 ,padding:10,borderRadius:10,margin:5}}></TextInput>
            </View>
            <View style={{ display: "flex", flexDirection: "row" , padding:20,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Loharki :-</Text>
              <TextInput
                style={{ borderColor: "gray",borderWidth: 1,width:170 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Loharki")}
                value={props.values.Loharki}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" , padding:20,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Sujasar :-</Text>

              <TextInput  
                style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Sujasar")}
                value={props.values.Sujasar}
                keyboardType="numeric"
              />
            </View>

            <View style={{  display: "flex", flexDirection: "row", padding:20,justifyContent:"center",alignItems:"center" }}>

              <Text style={{fontSize:15}}> Dudhiya :-     </Text>

              <TextInput
                style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Dudhiya")}
                value={props.values.Dudhiya}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:20,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Naibasti :-   </Text>

            <TextInput
              style={{ ramdevraColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Naibasti")}
              value={props.values.Naibasti}
              keyboardType="numeric"
                
              />
            </View>
            <View style={{borderRadius:200,overflow:'hidden',width:200,marginVertical:100,marginHorizontal:80}}>
            <Button title="Submit" onPress={props.handleSubmit} style={{marginLeft:200}} />
            </View>          
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

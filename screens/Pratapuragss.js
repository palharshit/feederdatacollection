import { Calendar } from 'react-native-calendars';
import React, { useState } from "react";
import axios from "axios";
import {StyleSheet,Button,View,Text,TouchableOpacity,Alert,TextInput,ScrollView} from "react-native"

import { Formik } from "formik"

export default function Pratapuragss() {
  const [date,setDate]=useState('')
  return (
    <ScrollView style={{padding:20}}>
      <Formik
        initialValues={{ RDate:date,Pratapura: "", Kishan: "", Gundala: "", Phedpratapura: "" }}
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
          axios.post('https://wild-pink-kangaroo.cyclic.app/pratapuragss',values)
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
            <View style={{ display: "flex", flexDirection: "row" , padding:3,justifyContent:"center",alignItems:"center" }}>
            <Text style={{margin:5}}> SELECTED DATE</Text>
            <TextInput 
            
            value={date}  style={{ borderColor: "gray",borderWidth: 1,width:180 ,padding:3,borderRadius:10,margin:5}}></TextInput>
            </View>
            <View style={{ display: "flex", flexDirection: "row" , padding:5,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Pratapura :-             </Text>
              <TextInput
                style={{ borderColor: "gray",borderWidth: 1,width:170 ,padding:3,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("Pratapura")}
                value={props.values.Pratapura}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" , padding:5,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Kishan :-                   </Text>

              <TextInput  
                style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:3,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("Kishan")}
                value={props.values.Kishan}
                keyboardType="numeric"
              />
            </View>

            <View style={{  display: "flex", flexDirection: "row", padding:3,justifyContent:"center",alignItems:"center" }}>

              <Text style={{fontSize:15}}> Gundala :-                </Text>

              <TextInput
                style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:3,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("Gundala")}
                value={props.values.Gundala}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:3,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Phedpratapura :-   </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:3,borderRadius:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Phedpratapura")}
              value={props.values.Phedpratapura}
              keyboardType="numeric"
            />
            </View>
       <View>
            <Button title="Submit" onPress={props.handleSubmit} />
            </View>          
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

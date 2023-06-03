import React, { useState } from "react";
import axios from "axios";
import {StyleSheet,Button,View,Text,TouchableOpacity,Alert,TextInput,ScrollView} from "react-native"

import { Formik } from "formik"
import { Calendar } from 'react-native-calendars';

export default function Bhensaragss() {
  const [date,setDate]=useState('')
  return (
    <ScrollView style={{padding:5}}>
      <Formik
        initialValues={{RDate:date, Rajgadh: "", Bhensaravill: "", Betina: "", Amarsar: "" }}
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
          axios.post('https://wild-pink-kangaroo.cyclic.app/bhensaragss',values)
          .then(response=>{
            
          })
          .catch(error=>{
            console.warn(error.response);
          });
        
        }}>
          
        {(props) => (
          <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <Calendar enableSwipeMonths={true}
            onDayPress={day => {
              setDate(day.dateString)
            
            }}/> 
            <View style={{ display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{margin:10}}> SELECTED DATE</Text>
            <TextInput 
            
            value={date}  style={{ borderColor: "gray",borderWidth: 1,width:125 ,padding:10,borderRadius:10,margin:5}}></TextInput>
            </View>
            <View style={{ display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Rajgadh :-</Text>
              <TextInput
                style={{ borderColor: "gray",borderWidth: 1,width:150 ,padding:10,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("Rajgadh")}
                value={props.values.Rajgadh}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Bhensaravill :-</Text>

              <TextInput  
                style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("Bhensaravill")}
                value={props.values.Bhensaravill}
                keyboardType="numeric"
              />
            </View>

            <View style={{  display: "flex", flexDirection: "row", padding:10,justifyContent:"center",alignItems:"center" }}>

              <Text style={{fontSize:15}}> Betina :-     </Text>

              <TextInput
                style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("Betina")}
                value={props.values.Betina}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Amarsar :-   </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:5}}
              placeholder="reading"
              onChangeText={props.handleChange("Amarsar")}
              value={props.values.Amarsar}
              keyboardType="numeric"
            />
            </View>
            <View style={{borderRadius:200,overflow:'hidden',width:200,marginVertical:10,marginHorizontal:80}}>
            <Button title="Submit" onPress={props.handleSubmit} style={{marginLeft:200}} />
            </View>          
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

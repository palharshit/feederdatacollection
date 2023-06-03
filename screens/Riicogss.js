import { Calendar } from 'react-native-calendars';
import React, { useState } from "react";
import axios from "axios";
import {StyleSheet,Button,View,Text,TouchableOpacity,Alert,TextInput,ScrollView} from "react-native"
import { Formik } from "formik";

export default function Riicogss() {
  const [date,setDate]=useState('')
  return (
    <ScrollView style={{padding:3}}>
      <Formik
        initialValues={{RDate:date, Biliyaselvi: "", Riico1: "", Riico2: "", Sankadafanta: "",Biliyaphedproject:"" }}
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
          axios.post('https://wild-pink-kangaroo.cyclic.app/riicogss',values)
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
            <View style={{ display: "flex", flexDirection: "row" , padding:3,justifyContent:"center",alignItems:"center" }}>
            <Text style={{margin:10}}>  DATE</Text>
            <TextInput 
            
            value={date}  style={{ borderColor: "gray",borderWidth: 1,width:200 ,padding:3,borderRadius:10,margin:5}}></TextInput>
            </View>
            <View style={{ display: "flex", flexDirection: "row" , padding:3,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Biliyaselvi :-</Text>
              <TextInput
                style={{ borderColor: "gray",borderWidth: 1,width:170 ,padding:3,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Biliyaselvi")}
                value={props.values.Biliyaselvi}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" , padding:3,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Riico1 :-</Text>

              <TextInput  
                style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:3,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Riico1")}
                value={props.values.Riico1}
                keyboardType="numeric"
              />
            </View>

            <View style={{  display: "flex", flexDirection: "row", padding:3,justifyContent:"center",alignItems:"center" }}>

              <Text style={{fontSize:15}}> Riico2 :-     </Text>

              <TextInput
                style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:3,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Riico2")}
                value={props.values.Riico2}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:3,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Sankadafanta :-  </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,riico:170 ,padding:3,borderRadius:10,margin:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Sankadafanta")}
              value={props.values.Sankadafanta}
            keyboardType="numeric"
            />
     </View>
     <View style={{  display: "flex", flexDirection: "row" ,padding:3,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Biliyaphedproject :-  </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,riico:170 ,padding:3,borderRadius:10,margin:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Biliyaphedproject")}
              value={props.values.Biliyaphedproject}
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

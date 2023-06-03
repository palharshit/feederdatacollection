import React, { useState } from "react";
import axios from "axios";
import {StyleSheet,Button,View,Text,TouchableOpacity,Alert,TextInput,ScrollView} from "react-native"

import { Formik } from "formik"
import { Calendar } from 'react-native-calendars';

export default function Lathigss() {
  const [date,setDate]=useState('')
  return (
    <ScrollView style={{padding:5}}>
      <Formik
        initialValues={{RDate:date, Lathiag1: "", Lathivill: "", Dholiya: "", Bhadriya: "",Mes:"",Phedkhetolai:"",Dholiyaag:"" }}
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
          axios.post('https://wild-pink-kangaroo.cyclic.app/lathigss',values)
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
            
            value={date}  style={{ borderColor: "gray",borderWidth: 1,width:200 ,padding:10,borderRadius:10,margin:5}}></TextInput>
            </View>
            <View style={{ display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Lathiag1 :-</Text>
              <TextInput
                style={{ borderColor: "gray",borderWidth: 1,width:170 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Lathiag1")}
                value={props.values.Lathiag1}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> Lathivill :-</Text>

              <TextInput  
                style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Lathivill")}
                value={props.values.Lathivill}
                keyboardType="numeric"
              />
            </View>

            <View style={{  display: "flex", flexDirection: "row", padding:10,justifyContent:"center",alignItems:"center" }}>

              <Text style={{fontSize:15}}> Dholiya :-     </Text>

              <TextInput
                style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
                placeholder="reading"
                onChangeText={props.handleChange("Dholiya")}
                value={props.values.Dholiya}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Bhadriya :-   </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Bhadriya")}
              value={props.values.Bhadriya}
              keyboardType="numeric"
            />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Dholiyaag :-   </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Dholiyaag")}
              value={props.values.Dholiyaag}
              keyboardType="numeric"
            />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Mes :-   </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Mes")}
              value={props.values.Mes}
              keyboardType="numeric"
            />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> Phedkhetolai :-   </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,width:170 ,padding:10,borderRadius:10,margin:10}}
              placeholder="reading"
              onChangeText={props.handleChange("Phedkhetolai")}
              value={props.values.Phedkhetolai}
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

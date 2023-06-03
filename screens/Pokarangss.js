import React, { useState } from "react";
import axios from "axios";
import {StyleSheet,Button,View,Text,Alert,TextInput,ScrollView} from "react-native"
import { Formik } from "formik";
import { Calendar } from 'react-native-calendars';




export default function Pokarangss({}) {
  const [date,setDate]=useState('');
  
  return (
    <ScrollView style={{padding:5}}>
      <Formik
        initialValues={{RDate:date, Pokaran: "", MBWell: "", Ujala: "", Gomat: "" }}
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
          
          axios.post('https://wild-pink-kangaroo.cyclic.app/pokarangss',values)
          .then(response=>{
          
           

          })
          .catch(error=>{
            console.warn(error.response);
          });
      
        }
        
        }
>
        {(props) => (
          <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Calendar enableSwipeMonths={true}
            onDayPress={day => {
              setDate(day.dateString)
           
            }          
          }   
          /> 
            <View style={{ display: "flex", flexDirection: "row" , padding:10,justifyContent:"space-evenly" ,alignItems:"center" }}>
            <Text style={{margin:0}}>DATE</Text>
            <TextInput 
            value={date}  style={{ borderColor: "gray",borderWidth: 1,width:125 ,padding:10,borderRadius:10,margin:5}}></TextInput>
            </View>
            <View style={{ display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
           
              <Text style={{fontSize:15}}> POKARAN :-</Text>
              <TextInput
                style={{ borderColor: "gray",borderWidth: 1,width:150 ,padding:10,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("Pokaran")}
                value={props.values.Pokaran}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" , padding:10,justifyContent:"center",alignItems:"center" }}>
              <Text style={{fontSize:15}}> MB WELL :-</Text>

              <TextInput  
                style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("MBWell")}
                value={props.values.MBWell}
                keyboardType="numeric"
              />
            </View>

            <View style={{  display: "flex", flexDirection: "row", padding:10,justifyContent:"center",alignItems:"center" }}>

              <Text style={{fontSize:15}}> UJALA :-     </Text>

              <TextInput
                style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:5}}
                placeholder="reading"
                onChangeText={props.handleChange("Ujala")}
                value={props.values.Ujala}
                keyboardType="numeric"
              />
            </View>
            <View style={{  display: "flex", flexDirection: "row" ,padding:10,justifyContent:"center",alignItems:"center" }}>
            <Text style={{fontSize:15}}> GOMAT :-   </Text>

            <TextInput
              style={{ borderColor: "gray", borderWidth: 1 ,width:150 ,padding:10,borderRadius:10,margin:5}}
              placeholder="reading"
              onChangeText={props.handleChange("Gomat")}
              value={props.values.Gomat}
              keyboardType="numeric"
            />
            </View>
            <View style={{borderRadius:200,overflow:'hidden',width:300,marginVertical:20,marginHorizontal:80}}>
            <Button title="Submit" onPress={props.handleSubmit} style={{marginLeft:200}} />
            </View>          
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

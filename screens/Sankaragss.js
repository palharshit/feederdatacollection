import { Calendar } from 'react-native-calendars';
import React, { useState } from "react"
import axios from "axios"
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,ScrollView
} from "react-native"

import { Formik } from "formik"

export default function Sankaragss() {
  const [date,setDate]=useState('')
  return (
    <ScrollView style={{ padding: 5 }}>
      <Formik
        initialValues={{
          RDate:date,
          Jaloda: "",
          Khuda: "",
          Chok: "",
          Sankra: "",
          Achalpura: "",
          Nayasankda: "",
          Motisarphed: "",
          Phedprojectsankda: "",
        }}
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
          axios
            .post("https://wild-pink-kangaroo.cyclic.app/sankaragss", values)
            .then((response) => {
              console.warn(response)
            })
            .catch((error) => {
              console.warn(error.response)
            })
          console.log({ values })
        }}
      >
        {(props) => (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            
          >
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
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}> Jaloda :-</Text>
              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 170,
                  padding: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                placeholder="reading"
                onChangeText={props.handleChange("Jaloda")}
                value={props.values.Jaloda}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}> Khuda :-</Text>

              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 170,
                  padding: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                placeholder="reading"
                onChangeText={props.handleChange("Khuda")}
                value={props.values.Khuda}
                keyboardType="numeric"
              />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}> Chok :- </Text>

              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 170,
                  padding: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                placeholder="reading"
                onChangeText={props.handleChange("Chok")}
                value={props.values.Chok}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}> Sankra :- </Text>

              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 170,
                  padding: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                placeholder="reading"
                onChangeText={props.handleChange("Sankra")}
                value={props.values.Sankra}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}> Achalpura :- </Text>

              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 170,
                  padding: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                placeholder="reading"
                onChangeText={props.handleChange("Achalpura")}
                value={props.values.Achalpura}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}> Nayasankda :- </Text>

              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 170,
                  padding: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                placeholder="reading"
                onChangeText={props.handleChange("Nayasankda")}
                value={props.values.Nayasankda}
                keyboardType="numeric"
              />
            </View>
            
            
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}> Motisarphed :- </Text>

              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 170,
                  padding: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                placeholder="reading"
                onChangeText={props.handleChange("Motisarphed")}
                value={props.values.Motisarphed}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}> Phedprojectsankda :- </Text>

              <TextInput
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 170,
                  padding: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                placeholder="reading"
                onChangeText={props.handleChange("Phedprojectsankda")}
                value={props.values.Phedprojectsankda}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                borderRadius: 200,
                overflow: "hidden",
                width: 200,
                marginVertical: 100,
                marginHorizontal: 80,
              }}
            >
              <Button
                title="Submit"
                onPress={props.handleSubmit}
                style={{ marginLeft: 200 }}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

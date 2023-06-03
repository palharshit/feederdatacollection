import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,ScrollView,LogBox} from "react-native"

import { DataTable } from 'react-native-paper';
import axios from 'axios';
import moment from 'moment';

LogBox.ignoreAllLogs();

export default function Admin(){
  const [pokaran1,setpokaran1]=useState([]);
  const [pokaran2,setpokaran2]=useState([]);
  const [pokaran3,setpokaran3]=useState([]);

  // --------------------------------------------------
  const [bhensara1,setbhensara1]=useState([]);
  const [bhensara2,setbhensara2]=useState([]);
  const [bhensara3,setbhensara3]=useState([]);

  // -------------------------------------
  const [bonada1,setbonada1]=useState([]);
  const [bonada2,setbonada2]=useState([]);
  const [bonada3,setbonada3]=useState([]);

  // ---------------------------
  const [ekan1,setekan1]=useState([]);
  const [ekan2,setekan2]=useState([]);
  const [ekan3,setekan3]=useState([]);

// --------------------------

  const [keraliya1,setkeraliya1]=useState([]);
  const [keraliya2,setkeraliya2]=useState([]);
  const [keraliya3,setkeraliya3]=useState([]);
// ---------------------------------

  const [khinwjbas1,setkhinwjbas1]=useState([]);
  const [khinwjbas2,setkhinwjbas2]=useState([]);
  const [khinwjbas3,setkhinwjbas3]=useState([]);

  // ----------------------------
  const [lathi1,setlathi1]=useState([]);
  const [lathi2,setlathi2]=useState([]);
  const [lathi3,setlathi3]=useState([]);

  // -----------------------

  const [lohata1,setlohata1]=useState([]);
  const [lohata2,setlohata2]=useState([]);
  const [lohata3,setlohata3]=useState([]);
// ---------------------

const [nananiya1,setnananiya1]=useState([]);
  const [nananiya2,setnananiya2]=useState([]);
  const [nananiya3,setnananiya3]=useState([]);
// -----------------------

const [pratapura1,setpratapura1]=useState([]);
  const [pratapura2,setpratapura2]=useState([]);
  const [pratapura3,setpratapura3]=useState([]);
// ---------------------------

const [ramdevra1,setramdevra1]=useState([]);
  const [ramdevra2,setramdevra2]=useState([]);
  const [ramdevra3,setramdevra3]=useState([]);

// -------------------------

const [riico1,setriico1]=useState([]);
  const [riico2,setriico2]=useState([]);
  const [riico3,setriico3]=useState([]);

// ------------------------

const [sankara1,setsankara1]=useState([]);
  const [sankara2,setsankara2]=useState([]);
  const [sankara3,setsankara3]=useState([]);

  // ---------------------------

useEffect(()=>{
  fetchpokaran();
  fetchbhensara();
  fetchbonada();
  fetchekan();
  fetchkeraliya();
  fetchkhinwjbas();
  fetchlathi();
  fetchlohata();
  fetchnananiya();
  fetchpratapura();
  fetchramdevra();
  fetchriico();
  fetchsankara();

},[])

// --------------------------------------------------------------


const fetchpokaran=async(e)=>{

const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/pokarangss/todaydata');
const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/pokarangss/yesterdaydata');
const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/pokarangss/daybeforeyesterday');

setpokaran1(todaydata.data);
setpokaran2(yesterdaydata.data);
setpokaran3(daybeforeyesterday.data);
}

// ------------------------------------------------


const fetchbhensara=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/bhensaragss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/bhensaragss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/bhensaragss/daybeforeyesterday');
  console.log(todaydata.data);
  setbhensara1(todaydata.data);
  setbhensara2(yesterdaydata.data);
  setbhensara3(daybeforeyesterday.data);
  }



// --------------------------------------------------------------

const fetchbonada=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/bonadagss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/bonadagss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/bonadagss/daybeforeyesterday');
  
  setbonada1(todaydata.data);
  setbonada2(yesterdaydata.data);
  setbonada3(daybeforeyesterday.data);
  }

// --------------------------------------------------------------


const fetchekan=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/ekangss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/ekangss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/ekangss/daybeforeyesterday');
  
  setekan1(todaydata.data);
  setekan2(yesterdaydata.data);
  setekan3(daybeforeyesterday.data);
  }
// --------------------------------------------------------------


const fetchkeraliya=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/keraliyagss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/keraliyagss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/keraliyagss/daybeforeyesterday');
  
  setkeraliya1(todaydata.data);
  setkeraliya2(yesterdaydata.data);
  setkeraliya3(daybeforeyesterday.data);
  }

// --------------------------------------------------------------


const fetchkhinwjbas=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/khinwjbasgss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/khinwjbasgss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/khinwjbasgss/daybeforeyesterday');
  
  setkhinwjbas1(todaydata.data);
  setkhinwjbas2(yesterdaydata.data);
  setkhinwjbas3(daybeforeyesterday.data);
  }

// --------------------------------------------------------------


const fetchlathi=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/lathigss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/lathigss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/lathigss/daybeforeyesterday');
  
  setlathi1(todaydata.data);
  setlathi2(yesterdaydata.data);
  setlathi3(daybeforeyesterday.data);
  }
// --------------------------------------------------------------


const fetchlohata=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/lohatagss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/lohatagss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/lohatagss/daybeforeyesterday');
  
  setlohata1(todaydata.data);
  setlohata2(yesterdaydata.data);
  setlohata3(daybeforeyesterday.data);
  }


// --------------------------------------------------------------


const fetchnananiya=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/nananiyagss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/nananiyagss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/nananiyagss/daybeforeyesterday');
  
  setnananiya1(todaydata.data);
  setnananiya2(yesterdaydata.data);
  setnananiya3(daybeforeyesterday.data);
  }

// --------------------------------------------------------------
const fetchpratapura=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/pratapuragss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/pratapuragss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/pratapuragss/daybeforeyesterday');
  
  setpratapura1(todaydata.data);
  setpratapura2(yesterdaydata.data);
  setpratapura3(daybeforeyesterday.data);
  }

// --------------------------------------------------------------

const fetchramdevra=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/ramdevragss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/ramdevragss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/ramdevragss/daybeforeyesterday');
  
  setramdevra1(todaydata.data);
  setramdevra2(yesterdaydata.data);
  setramdevra3(daybeforeyesterday.data);
  }

// --------------------------------------------------------------
const fetchriico=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/riicogss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/riicogss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/riicogss/daybeforeyesterday');
  
  setriico1(todaydata.data);
  setriico2(yesterdaydata.data);
  setriico3(daybeforeyesterday.data);
  }

// --------------------------------------------------------------
const fetchsankara=async(e)=>{
  
  const todaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/sankaragss/todaydata');
  const yesterdaydata= await axios.get('https://wild-pink-kangaroo.cyclic.app/sankaragss/yesterdaydata');
  const daybeforeyesterday=await axios.get('https://wild-pink-kangaroo.cyclic.app/sankaragss/daybeforeyesterday');
  
  setsankara1(todaydata.data);
  setsankara2(yesterdaydata.data);
  setsankara3(daybeforeyesterday.data);
  }



// --------------------------------------------------------------

const currentdate=moment().format();

  return (
   
    <ScrollView >
     {/* <ScrollView horizontal={true}> */}
      <View>
      <DataTable >
        <DataTable.Header style={{backgroundColor:'aquamarine',fontWeight:'bold'}}>

          
          <DataTable.Title style={[styles.cell,{flex:0.5}]}><Text style={{fontSize:12,fontWeight:'bold',color:'black'}}>S.No</Text></DataTable.Title>
          <DataTable.Title style={[styles.cell]}><Text style={{fontSize:12,fontWeight:'bold',color:'black'}}>33/11 ss</Text></DataTable.Title>
          <DataTable.Title style={[styles.cell]}><Text style={{fontSize:12,fontWeight:'bold',color:'black'}}>FEEDER</Text></DataTable.Title>
          <DataTable.Title style={[styles.cell]}><Text style={{fontSize:12,fontWeight:'bold',color:'black'}}>{moment().format("DD/MM/YY")}</Text></DataTable.Title>
          <DataTable.Title style={[styles.cell]}><Text style={{fontSize:12,fontWeight:'bold',color:'black'}}> {moment().subtract(1, "days").format("DD/MM/YY")} </Text></DataTable.Title>
          <DataTable.Title style={[styles.cell,{width:3}]}><Text style={{fontSize:12,fontWeight:'bold',color:'black'}}>{moment().subtract(2, "days").format("DD/MM/YY")}</Text></DataTable.Title>
        </DataTable.Header>
{/* ----------------------------------------------------------------------------------------------------------- */}
          <DataTable.Row>
            <DataTable.Cell  style={[styles.cell,{flex:0.5}]}>1</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}>POKARAN</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}>Pokaran</DataTable.Cell>
            <DataTable.Cell  style={styles.cell}> {pokaran1.map((y) => {
              return (
                <View>
                  <Text>{y.Pokaran}</Text>
                </View>
              )
            })}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}> {pokaran2.map((y) => {
              return (
                <View>
                  <Text>{y.Pokaran}</Text>
                </View>
              )
            })}</DataTable.Cell>

            <DataTable.Cell style={styles.cell}> {pokaran3.map((y) => {
              return (
                <View>
                  <Text>{y.Pokaran}</Text>
                </View>
              )
            })}</DataTable.Cell>
          </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------------- */}
          <DataTable.Row  style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
            <DataTable.Cell style={[styles.cell,{flex:0.5}]}>2</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}>POKARAN</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}>MBWell</DataTable.Cell>
            <DataTable.Cell style={styles.cell}> {pokaran1.map((y) => {
              return (
                <View>
                  <Text>{y.MBWell}</Text>
                </View>
              )
            })}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}> {pokaran2.map((y) => {
              return (
                <View>
                  <Text>{y.MBWell}</Text>
                </View>
              )
            })}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}> {pokaran3.map((y) => {
              return (
                <View>
                  <Text>{y.MBWell}</Text>
                </View>
              )
            })}</DataTable.Cell>

          </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------------- */}
          <DataTable.Row >
            <DataTable.Cell style={[styles.cell,{flex:0.5}]}>3</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}>POKARAN</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}>Ujala</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}> {pokaran1.map((y) => {
              return (
                <View>
                  <Text>{y.Ujala}</Text>
                </View>
              )
            })}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}> {pokaran2.map((y) => {
              return (
                <View>
                  <Text>{y.Ujala}</Text>
                </View>
              )
            })}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}> {pokaran3.map((y) => {
              return (
                <View>
                  <Text>{y.Ujala}</Text>
                </View>
              )
            })}</DataTable.Cell>

          </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------------- */}          


          <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
            <DataTable.Cell style={[styles.cell,{flex:0.5}]}>4</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}>POKARAN</DataTable.Cell>
            <DataTable.Cell style={[styles.cell]}>Gomat</DataTable.Cell>
            <DataTable.Cell style={styles.cell}> {pokaran1.map((y) => {
              return (
                <View>
                  <Text>{y.Gomat}</Text>
                </View>
              )
            })}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}> {pokaran2.map((y) => {
              return (
                <View>
                  <Text>{y.Gomat}</Text>
                </View>
              )
            })}</DataTable.Cell>

            <DataTable.Cell style={styles.cell}> {pokaran3.map((y) => {
              return (
                <View>
                  <Text>{y.Gomat}</Text>
                </View>
              )
            })}</DataTable.Cell>
          </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------------- */}
        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>5</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>BHENSARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Rajgadh</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {bhensara1.map((y)=>{
          return(
            <View>
              <Text>{y.Rajgadh}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bhensara2.map((y)=>{
          return(
            <View>
              <Text>{y.Rajgadh}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bhensara3.map((y)=>{
          return(
            <View>
              <Text>{y.Rajgadh}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
 {/* ---------------------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>6</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>BHENSARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Bhensaravill</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {bhensara1.map((y)=>{
          return(
            <View>
              <Text>{y.Bhensaravill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bhensara2.map((y)=>{
          return(
            <View>
              <Text>{y.Bhensaravill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bhensara3.map((y)=>{
          return(
            <View>
              <Text>{y.Bhensaravill}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>7</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>BHENSARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Betina</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {bhensara1.map((y)=>{
          return(
            <View>
              <Text>{y.Betina}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bhensara2.map((y)=>{
          return(
            <View>
              <Text>{y.Betina}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bhensara3.map((y)=>{
          return(
            <View>
              <Text>{y.Betina}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>8</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>BHENSARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Amarsar</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {bhensara1.map((y)=>{
          return(
            <View>
              <Text>{y.Amarsar}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bhensara2.map((y)=>{
          return(
            <View>
              <Text>{y.Amarsar}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bhensara3.map((y)=>{
          return(
            <View>
              <Text>{y.Amarsar}</Text>
              </View>
          )
        })}</DataTable.Cell>
         
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>9</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>BONADA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}> Bonadavill</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {bonada1.map((y)=>{
          return(
            <View>
              <Text>{y.Bonadavill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bonada2.map((y)=>{
          return(
            <View>
              <Text>{y.Bonadavill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bonada3.map((y)=>{
          return(
            <View>
              <Text>{y.Bonadavill}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>10</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>BONADA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Sabalpura</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>{bonada1.map((y)=>{
          return(
            <View>
              <Text>{y.Sabalpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bonada2.map((y)=>{
          return(
            <View>
              <Text>{y.Sabalpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bonada3.map((y)=>{
          return(
            <View>
              <Text>{y.Sabalpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>11</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>BONADA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}> Ola</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {bonada1.map((y)=>{
          return(
            <View>
              <Text>{y.Ola}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bonada2.map((y)=>{
          return(
            <View>
              <Text>{y.Ola}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bonada3.map((y)=>{
          return(
            <View>
              <Text>{y.Ola}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>12</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>BONADA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}> Phedbonada</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {bonada1.map((y)=>{
          return(
            <View>
              <Text>{y.Phedbonada}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bonada2.map((y)=>{
          return(
            <View>
              <Text>{y.Phedbonada}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {bonada3.map((y)=>{
          return(
            <View>
              <Text>{y.Phedbonada}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>13</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>EKAN</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Satrabera</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {ekan1.map((y)=>{
          return(
            <View>
              <Text>{y.Satrabera}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ekan2.map((y)=>{
          return(
            <View>
              <Text>{y.Satrabera}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ekan3.map((y)=>{
          return(
            <View>
              <Text>{y.Satrabera}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>14</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>EKAN</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Ugras</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {ekan1.map((y)=>{
          return(
            <View>
              <Text>{y.Ugras}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ekan2.map((y)=>{
          return(
            <View>
              <Text>{y.Ugras}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ekan3.map((y)=>{
          return(
            <View>
              <Text>{y.Ugras}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>15</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>EKAN</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Phedeka</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {ekan1.map((y)=>{
          return(
            <View>
              <Text>{y.Phedeka}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ekan2.map((y)=>{
          return(
            <View>
              <Text>{y.Phedeka}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ekan3.map((y)=>{
          return(
            <View>
              <Text>{y.Phedeka}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>16</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>EKAN</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Tower</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {ekan1.map((y)=>{
          return(
            <View>
              <Text>{y.Tower}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ekan2.map((y)=>{
          return(
            <View>
              <Text>{y.Tower}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ekan3.map((y)=>{
          return(
            <View>
              <Text>{y.Tower}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>17</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>KERALIYA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Keraliyavill</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {keraliya1.map((y)=>{
          return(
            <View>
              <Text>{y.Keraliyavill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {keraliya2.map((y)=>{
          return(
            <View>
              <Text>{y.Keraliyavill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {keraliya3.map((y)=>{
          return(
            <View>
              <Text>{y.Keraliyavill}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>18</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>KERALIYA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}> Ainath</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {keraliya1.map((y)=>{
          return(
            <View>
              <Text>{y.Ainath}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {keraliya2.map((y)=>{
          return(
            <View>
              <Text>{y.Ainath}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {keraliya3.map((y)=>{
          return(
            <View>
              <Text>{y.Ainath}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>19</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>KERALIYA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Namrarai</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {keraliya1.map((y)=>{
          return(
            <View>
              <Text>{y.Namrarai}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {keraliya2.map((y)=>{
          return(
            <View>
              <Text>{y.Namrarai}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {keraliya3.map((y)=>{
          return(
            <View>
              <Text>{y.Namrarai}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>20</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>KERALIYA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Dhaja</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {keraliya1.map((y)=>{
          return(
            <View>
              <Text>{y.Dhaja}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {keraliya2.map((y)=>{
          return(
            <View>
              <Text>{y.Dhaja}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {keraliya3.map((y)=>{
          return(
            <View>
              <Text>{y.Dhaja}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>21</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>KHINWJBAS</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Shivpura</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {khinwjbas1.map((y)=>{
          return(
            <View>
              <Text>{y.Shivpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {khinwjbas2.map((y)=>{
          return(
            <View>
              <Text>{y.Shivpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {khinwjbas3.map((y)=>{
          return(
            <View>
              <Text>{y.Shivpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>22</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>KHINWJBAS</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Lawan</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {khinwjbas1.map((y)=>{
          return(
            <View>
              <Text>{y.Lawan}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {khinwjbas2.map((y)=>{
          return(
            <View>
              <Text>{y.Lawan}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {khinwjbas3.map((y)=>{
          return(
            <View>
              <Text>{y.Lawan}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>

{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>23</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LATHI</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Lathiag1</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lathi1.map((y)=>{
          return(
            <View>
              <Text>{y.Lathiag1}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi2.map((y)=>{
          return(
            <View>
              <Text>{y.Lathiag1}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi3.map((y)=>{
          return(
            <View>
              <Text>{y.Lathiag1}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>24</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LATHI</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Lathivill</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lathi1.map((y)=>{
          return(
            <View>
              <Text>{y.Lathivill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi2.map((y)=>{
          return(
            <View>
              <Text>{y.Lathivill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi3.map((y)=>{
          return(
            <View>
              <Text>{y.Lathivill}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>25</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LATHI</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Dholiya</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lathi1.map((y)=>{
          return(
            <View>
              <Text>{y.Dholiya}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi2.map((y)=>{
          return(
            <View>
              <Text>{y.Dholiya}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi3.map((y)=>{
          return(
            <View>
              <Text>{y.Dholiya}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>26</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LATHI</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Bhadriya</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lathi1.map((y)=>{
          return(
            <View>
              <Text>{y.Bhadriya}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi2.map((y)=>{
          return(
            <View>
              <Text>{y.Bhadriya}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi3.map((y)=>{
          return(
            <View>
              <Text>{y.Bhadriya}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>

{/* ----------------------------------------------------------------------------------------------------- */}


        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>27</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LATHI</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Mes</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lathi1.map((y)=>{
          return(
            <View>
              <Text>{y.Mes}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi2.map((y)=>{
          return(
            <View>
              <Text>{y.Mes}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi3.map((y)=>{
          return(
            <View>
              <Text>{y.Mes}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>28</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LATHI</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Phedkhetolai</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lathi1.map((y)=>{
          return(
            <View>
              <Text>{y.Phedkhetolai}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi2.map((y)=>{
          return(
            <View>
              <Text>{y.Phedkhetolai}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi3.map((y)=>{
          return(
            <View>
              <Text>{y.Phedkhetolai}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>29</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LATHI</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Dholiyaag</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lathi1.map((y)=>{
          return(
            <View>
              <Text>{y.Dholiyaag}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi2.map((y)=>{
          return(
            <View>
              <Text>{y.Dholiyaag}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lathi3.map((y)=>{
          return(
            <View>
              <Text>{y.Dholiyaag}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>30</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LOHATA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Kumtarai</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lohata1.map((y)=>{
          return(
            <View>
              <Text>{y.Kumtarai}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata2.map((y)=>{
          return(
            <View>
              <Text>{y.Kumtarai}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata3.map((y)=>{
          return(
            <View>
              <Text>{y.Kumtarai}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}



        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>31</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LOHATA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Lohata</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lohata1.map((y)=>{
          return(
            <View>
              <Text>{y.Lohata}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata2.map((y)=>{
          return(
            <View>
              <Text>{y.Lohata}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata3.map((y)=>{
          return(
            <View>
              <Text>{y.Lohata}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>32</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LOHATA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Ag1</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lohata1.map((y)=>{
          return(
            <View>
              <Text>{y.Ag1}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata2.map((y)=>{
          return(
            <View>
              <Text>{y.Ag1}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata3.map((y)=>{
          return(
            <View>
              <Text>{y.Ag1}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>33</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LOHATA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Ratankibassi</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lohata1.map((y)=>{
          return(
            <View>
              <Text>{y.Ratankibassi}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata2.map((y)=>{
          return(
            <View>
              <Text>{y.Ratankibassi}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata3.map((y)=>{
          return(
            <View>
              <Text>{y.Ratankibassi}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>34</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>LOHATA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Phedlohata</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {lohata1.map((y)=>{
          return(
            <View>
              <Text>{y.Phedlohata}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata2.map((y)=>{
          return(
            <View>
              <Text>{y.Phedlohata}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {lohata3.map((y)=>{
          return(
            <View>
              <Text>{y.Phedlohata}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>

{/* ----------------------------------------------------------------------------------------------------- */}


        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>35</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>NANANIYA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Nananiyaivill</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {nananiya1.map((y)=>{
          return(
            <View>
              <Text>{y.Nananiyaivill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {nananiya2.map((y)=>{
          return(
            <View>
              <Text>{y.Nananiyaivill}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {nananiya3.map((y)=>{
          return(
            <View>
              <Text>{y.Nananiyaivill}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>36</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>NANANIYA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Phednananiyai</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {nananiya1.map((y)=>{
          return(
            <View>
              <Text>{y.Phednananiyai}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {nananiya2.map((y)=>{
          return(
            <View>
              <Text>{y.Phednananiyai}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {nananiya3.map((y)=>{
          return(
            <View>
              <Text>{y.Phednananiyai}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>37</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>NANANIYA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Odhaniya</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {nananiya1.map((y)=>{
          return(
            <View>
              <Text>{y.Odhaniya}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {nananiya2.map((y)=>{
          return(
            <View>
              <Text>{y.Odhaniya}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {nananiya3.map((y)=>{
          return(
            <View>
              <Text>{y.Odhaniya}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>38</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>NANANIYA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Modarari</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {nananiya1.map((y)=>{
          return(
            <View>
              <Text>{y.Modarari}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {nananiya2.map((y)=>{
          return(
            <View>
              <Text>{y.Modarari}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {nananiya3.map((y)=>{
          return(
            <View>
              <Text>{y.Modarari}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>

{/* ----------------------------------------------------------------------------------------------------- */}


        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>39</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>PRATAPURA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Pratapura</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {pratapura1.map((y)=>{
          return(
            <View>
              <Text>{y.Pratapura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {pratapura2.map((y)=>{
          return(
            <View>
              <Text>{y.Pratapura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {pratapura3.map((y)=>{
          return(
            <View>
              <Text>{y.Pratapura}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>40</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>PRATAPURA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Kishan</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {pratapura1.map((y)=>{
          return(
            <View>
              <Text>{y.Kishan}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {pratapura2.map((y)=>{
          return(
            <View>
              <Text>{y.Kishan}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {pratapura3.map((y)=>{
          return(
            <View>
              <Text>{y.Kishan}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>41</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>PRATAPURA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Gundala</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {pratapura1.map((y)=>{
          return(
            <View>
              <Text>{y.Gundala}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {pratapura2.map((y)=>{
          return(
            <View>
              <Text>{y.Gundala}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {pratapura3.map((y)=>{
          return(
            <View>
              <Text>{y.Gundala}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>42</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>PRATAPURA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Phedpratapura</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {pratapura1.map((y)=>{
          return(
            <View>
              <Text>{y.Phedpratapura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {pratapura2.map((y)=>{
          return(
            <View>
              <Text>{y.Phedpratapura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {pratapura3.map((y)=>{
          return(
            <View>
              <Text>{y.Phedpratapura}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>

{/* ----------------------------------------------------------------------------------------------------- */}


        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>43</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RAMDEVRA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Loharki</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {ramdevra1.map((y)=>{
          return(
            <View>
              <Text>{y.Loharki}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ramdevra2.map((y)=>{
          return(
            <View>
              <Text>{y.Loharki}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ramdevra3.map((y)=>{
          return(
            <View>
              <Text>{y.Loharki}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>44</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RAMDEVRA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Sujasar</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {ramdevra1.map((y)=>{
          return(
            <View>
              <Text>{y.Sujasar}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ramdevra2.map((y)=>{
          return(
            <View>
              <Text>{y.Sujasar}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ramdevra3.map((y)=>{
          return(
            <View>
              <Text>{y.Sujasar}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>45</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RAMDEVRA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Dudhiya</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {ramdevra1.map((y)=>{
          return(
            <View>
              <Text>{y.Dudhiya}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ramdevra2.map((y)=>{
          return(
            <View>
              <Text>{y.Dudhiya}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ramdevra3.map((y)=>{
          return(
            <View>
              <Text>{y.Dudhiya}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>46</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RAMDEVRA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Naibasti</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {ramdevra1.map((y)=>{
          return(
            <View>
              <Text>{y.Naibasti}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ramdevra2.map((y)=>{
          return(
            <View>
              <Text>{y.Naibasti}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {ramdevra3.map((y)=>{
          return(
            <View>
              <Text>{y.Naibasti}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>


{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>47</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RIICO</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Biliyaselvi</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {riico1.map((y)=>{
          return(
            <View>
              <Text>{y.Biliyaselvi}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico2.map((y)=>{
          return(
            <View>
              <Text>{y.Biliyaselvi}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico3.map((y)=>{
          return(
            <View>
              <Text>{y.Biliyaselvi}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>48</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RIICO</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Riico1</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {riico1.map((y)=>{
          return(
            <View>
              <Text>{y.Riico1}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico2.map((y)=>{
          return(
            <View>
              <Text>{y.Riico1}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico3.map((y)=>{
          return(
            <View>
              <Text>{y.Riico1}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>49</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RIICO</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Riico2</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {riico1.map((y)=>{
          return(
            <View>
              <Text>{y.Riico2}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico2.map((y)=>{
          return(
            <View>
              <Text>{y.Riico2}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico3.map((y)=>{
          return(
            <View>
              <Text>{y.Riico2}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>50</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RIICO</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Sankadafanta</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {riico1.map((y)=>{
          return(
            <View>
              <Text>{y.Sankadafanta}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico2.map((y)=>{
          return(
            <View>
              <Text>{y.Sankadafanta}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico3.map((y)=>{
          return(
            <View>
              <Text>{y.Sankadafanta}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>


{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>51</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>RIICO</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Biliyaphedproject</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {riico1.map((y)=>{
          return(
            <View>
              <Text>{y.Biliyaphedproject}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico2.map((y)=>{
          return(
            <View>
              <Text>{y.Biliyaphedproject}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {riico3.map((y)=>{
          return(
            <View>
              <Text>{y.Biliyaphedproject}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>52</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>SANKARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Jaloda</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {sankara1.map((y)=>{
          return(
            <View>
              <Text>{y.Jaloda}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara2.map((y)=>{
          return(
            <View>
              <Text>{y.Jaloda}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara3.map((y)=>{
          return(
            <View>
              <Text>{y.Jaloda}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>53</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>SANKARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Khuda</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {sankara1.map((y)=>{
          return(
            <View>
              <Text>{y.Khuda}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara2.map((y)=>{
          return(
            <View>
              <Text>{y.Khuda}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara3.map((y)=>{
          return(
            <View>
              <Text>{y.Khuda}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>54</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>SANKARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Chok</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {sankara1.map((y)=>{
          return(
            <View>
              <Text>{y.Chok}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara2.map((y)=>{
          return(
            <View>
              <Text>{y.Chok}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara3.map((y)=>{
          return(
            <View>
              <Text>{y.Chok}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>

{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>55</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>SANKARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Sankra</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {sankara1.map((y)=>{
          return(
            <View>
              <Text>{y.Sankra}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara2.map((y)=>{
          return(
            <View>
              <Text>{y.Sankra}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara3.map((y)=>{
          return(
            <View>
              <Text>{y.Sankra}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>56</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>SANKARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Achalpura</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {sankara1.map((y)=>{
          return(
            <View>
              <Text>{y.Achalpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara2.map((y)=>{
          return(
            <View>
              <Text>{y.Achalpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara3.map((y)=>{
          return(
            <View>
              <Text>{y.Achalpura}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}
        <DataTable.Row>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>57</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>SANKARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Nayasankda</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {sankara1.map((y)=>{
          return(
            <View>
              <Text>{y.Nayasankda}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara2.map((y)=>{
          return(
            <View>
              <Text>{y.Nayasankda}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara3.map((y)=>{
          return(
            <View>
              <Text>{y.Nayasankda}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>
{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row style={{backgroundColor:'rgba(161, 171, 168, 0.5)'}}>
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>58</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>SANKARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>Motisarphed</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {sankara1.map((y)=>{
          return(
            <View>
              <Text>{y.Motisarphed}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara2.map((y)=>{
          return(
            <View>
              <Text>{y.Motisarphed}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara3.map((y)=>{
          return(
            <View>
              <Text>{y.Motisarphed}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>

{/* ----------------------------------------------------------------------------------------------------- */}

        <DataTable.Row >
          <DataTable.Cell style={[styles.cell,{flex:0.5}]}>59</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>SANKARA</DataTable.Cell>
          <DataTable.Cell style={[styles.cell]}>JalodaPhedproject</DataTable.Cell>
          <DataTable.Cell style={styles.cell}> {sankara1.map((y)=>{
          return(
            <View>
              <Text>{y.JalodaPedprojectsankda}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara2.map((y)=>{
          return(
            <View>  
              <Text>{y.JalodaPedprojectsankda}</Text>
              </View>
          )
        })}</DataTable.Cell>
         <DataTable.Cell style={styles.cell}> {sankara3.map((y)=>{
          return(
            <View>
              <Text>{y.JalodaPedprojectsankda}</Text>
              </View>
          )
        })}</DataTable.Cell>
        </DataTable.Row>

{/* ----------------------------------------------------------------------------------------------------- */}        


      </DataTable>
      </View>
      {/* </ScrollView> */}
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  cell:{
    borderWidth: 1,
    borderColor: 'black',
    
  }
  

});

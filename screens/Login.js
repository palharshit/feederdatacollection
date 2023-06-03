import { View,Text,TextInput,Button,Image, Alert } from 'react-native';
import React,{useState} from 'react';


export default function  Login({navigation}){
    const [id,setId]=useState('');
    const [passd,setPassd]=useState('');
    
    const handleid=(e)=>{
    setId(e.nativeEvent.text)    
    }

    const handlepassd=(e)=>{
        setPassd(e.nativeEvent.text)

    }

    const handlesubmit=()=>{
      
        if(id=='POKARAN' && passd=='POKARAN'){
            return navigation.navigate('Pokarangss')
        }
         else if(id=='BHENSARA' && passd=='BHENSARA'){
            return navigation.navigate('Bhensaragss')
                   
        }else if(id=='BONADA' && passd=='BONADA'){
            return navigation.navigate('Bonadagss')
        }else if(id=='EKAN' && passd=='EKAN'){
            return navigation.navigate('Ekangss')
        }else if(id=='KERALIYA' && passd=='KERALIYA'){
            return navigation.navigate('Keraliyagss')
        }else if(id=='KHINWJBAS' && passd=='KHINWJBAS'){
            return navigation.navigate('Khinwjbasgss')
        }else if(id=='LATHI' && passd=='LATHI'){
            return navigation.navigate('Lathigss')
        }else if(id=='LOHATA' && passd=='LOHATA'){
            return navigation.navigate('Lohatagss')
        }else if(id=='NANANIYA' && passd=='NANANIYA'){
            return navigation.navigate('Nananiyagss')
        }else if(id=='PRATAPURA' && passd=='PRATAPURA'){
            return navigation.navigate('Pratapuragss')
        }else if(id=='RAMDEVRA' && passd=='RAMDEVRA'){
            return navigation.navigate('Ramdevragss')
        }else if(id=='RIICO' && passd=='RIICO'){
            return navigation.navigate('Riicogss')
        }else if(id=='SANKARA' && passd=='SANKARA'){
            return navigation.navigate('Sankaragss')
        }
        else if(id=='ADMIN' && passd=='ADMIN'){
            return navigation.navigate('Admin')
        }
        else{
            return Alert.alert('wrong credentials');
            }
        }

    
   



    return(
        <View style={{display:"flex", flexDirection:'column',  alignItems:'center',justifyContent:'center'}}>
        <View style={{display:"flex", flexDirection:'column',  alignItems:'center',justifyContent:'center'}}>
        <Image source={(require('../download.jpg'))} style={{ width: 150, height: 150,margin:30 }} />
        </View>

            <Text style={{fontWeight:'bold',fontSize:25,marginTop:10 }}>EXECUTIVE ENGINEER(O&M)</Text>
            <Text style={{fontWeight:'bold',fontSize:20,}}>JOHDPUR DISCOM POKARAN</Text>
           
            <TextInput onChange={handleid} style={{borderColor:'gray',borderWidth:2, marginTop:40,width:259,borderRadius:30,padding:10  }} placeholder='USER ID'/>
            <TextInput secureTextEntry={true} onChange={handlepassd} style={{borderColor:'gray',borderWidth:2, marginTop:15,width:259,marginBottom:20,borderRadius:30,padding:10}} placeholder='PASSWORD'/>
            <View style={{borderRadius:200,overflow:'hidden',width:300,marginVertical:20}}>
            <Button title='Login' style={{}} onPress={handlesubmit}/>
            </View>
            

        </View>

    )

}
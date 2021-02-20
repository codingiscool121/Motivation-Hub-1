import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'

export default class Login extends React.Component {
 constructor(props){
     super(props)
     this.state={
         emailId: "",
         password: "",
     }
 }
 render(){
     return(
         <View style={styles.container}>
             <Text style={styles.title}> Login To Motivation Hub</Text>
             <TextInput
             placeholder="Enter your email address."
             placeholderTextColor="#3188d1"
             keyboardType="email-address"
             style={styles.text}
             />
             <TextInput
             placeholder="Enter your password"
             placeholderTextColor="#3188d1"
             style={styles.text}
             secureTextEntry={true}
             />
             <TouchableOpacity style={styles.button}>
                 <Text>Login</Text>
             </TouchableOpacity>
         </View>
     )
 }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#A3CEF1",
        justifyContent: "center",
        alignItems:"center",
    },
    title:{
        fontSize:50,
        fontWeight:"bold",
        color:"#546a76"
    },
    text:{
        width:"30%",
        height: "10%",
        marginTop: 30,
        color:"#3cab4f",
        padding:10,
        borderWidth: 5,
        borderColor: "#14213d",
        textAlign: "center",
        shadowColor:"#14213d",
        shadowOffset:{width:0,height:10},
        shadowRadius:5,
        shdowOpacity:0.2,
    },
    button:{
        width:"20%",
        height: "5%",
        padding:10,
        backgroundColor:"#0197f6",
        marginTop:100,
        justifyContent: "center",
        textAlign: "center",
        borderRadius:30,
    }
})
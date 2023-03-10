import React from 'react';
import {Text, View, Image, ScrollView, TextInput, Button,Alert} from 'react-native';


const YourApp = () => {

  return (
    <View
    
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',justifyContent: 'center',alignItems: 'center'
      }}>

      <Image
        source={{
           uri: 'https://i.pinimg.com/564x/80/13/93/801393b5729d1fde1ee88c437e438ca8.jpg',
          }}
        style={{width: 500, height: 100,  margin:10}}
      />

      <Text
      style={{color:'black',  margin:30, fontSize: 20, fontWeight: "bold", fontFamily:'Roboto',textShadowColor:'#f0f' }}
      >Welcome!
      </Text>
      
     <TextInput
        style={{
          color:'black',height: 50,width: 300,backgroundColor: 'gray',borderColor: 'black',borderWidth: 2,textAlign: 'center',margin: 10,borderRadius: 22
        }}
      
       defaultValue ="Enter your name"
      />
   
      <TextInput
        style={{color:'black',height: 50,width: 300,backgroundColor: 'gray', borderColor: 'black',borderWidth: 2,marginTop: 10,textAlign: 'center',marginBottom: 40,
        borderRadius: 22 }}

       defaultValue ="Enter your Email"
      />
       <Button
       
       color="black"
       title="Continue"

       onPress={() => Alert.alert('Thanks to join!')}
      />
   
   <Text
      style={{color:'black',  margin:30, fontSize: 9, fontWeight: "100", fontFamily:'serif',textShadowColor:'#f0f' }}
      >&copy; 2023 Aseel Ziyad
      </Text>
      

    </View>
    
    );

     
  
};

export default YourApp;
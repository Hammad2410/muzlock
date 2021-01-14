import React from "react";
import {Image,View,StyleSheet,Text,TouchableOpacity} from "react-native";
import { Content} from 'native-base';
import { heightPercentageToDP, widthPercentageToDP } from "../components/React Native Responsive Screen/";

const Premium = () => {
    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <View style={styles.text}>
            
        <Text style={styles.TextStyle}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the </Text>
         <Content>
             <TouchableOpacity style={styles.bottomBtn}>
                 <Text style={{color:"white",fontSize:18,textAlign:"center"}}>Try Premium For Free</Text>
             </TouchableOpacity>
             </Content>
             </View>
    
        </Content>
        
    )
}
const styles = StyleSheet.create({
    text:{
        marginTop:'120%',
        position: 'absolute',
         justifyContent: 'center'
    },
    TextStyle: {
        textAlign:"center",
        color:"#808080",
        fontSize:15,
        borderBottomWidth:0.5,
        borderColor: '#808080',
        paddingBottom:10,

      },
      bottomBtn:
    {
        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width:widthPercentageToDP('90%'),
        borderRadius: 30,
        height: 45,
        backgroundColor: '#F2384A',
    },
    btn:{
        marginTop:'120%',
        position: 'absolute',
         justifyContent: 'center'
    }
   
})
export default Premium;
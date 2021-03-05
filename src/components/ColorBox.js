import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ColorBox = ({ colorName, mycolor }) => {
    return (
        <View style={{ height: hp('10%'), width: wp('100%'), }}>
            <TouchableOpacity style={{
                flexDirection: 'row', flex: 1,
                borderBottomColor: 'grey',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                alignItems: 'center'

            }}>
                <Text style={{


                    paddingHorizontal: 10,
                    // alignContent: 'center', 
                    fontSize: 18
                }}>{colorName}</Text>
                <View style={{
                    borderBottomWidth: 1,
                    width: 20, marginRight: 15,
                    backgroundColor: mycolor,
                    borderColor: mycolor,
                    height: 20, borderRadius: 2
                }}>



                </View>
            </TouchableOpacity>
        </View>
    )
}
export default ColorBox;
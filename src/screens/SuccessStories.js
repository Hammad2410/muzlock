import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import SuccessStory from '../components/SuccessStory';
const SuccessStories = ({ navigation }) => {
    return (
        <ScrollView>
            <Content contentContainerStyle={{ flex: 1 }}>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}
                    >
                        <Icon name="chevron-back" size={30} />
                    </TouchableOpacity>

                    <Image
                        resizeMode={'contain'}
                        source={require('../assets/logo.png')}
                        style={{
                            width: 55, height: 37,
                            marginLeft: '40%',
                            //  justifyContent: 'center',
                            // alignSelf: 'center',
                            justifyContent: 'center'
                            // marginLeft: '30%'
                        }} />

                </View>
                <View>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15, alignSelf: 'center' }}> Success Stories </Text>
                </View>

                <View style={{ marginTop: '2%', borderWidth: 1 }}>

                </View>


                <SuccessStory />
                <SuccessStory />


            </Content>
        </ScrollView>
    )
}
export default SuccessStories;
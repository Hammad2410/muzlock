import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from
    'react-native-responsive-screen';
import { Content, Header, Right, Left, Body, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const ReportProblem = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
            <View style={{
                width: wp('90%'),
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#e6e4e1',
                alignSelf: 'center',
                height: hp('75%'), backgroundColor: '#f5f4f2'
            }}>
                <Image
                    style={{
                        alignSelf: 'center',
                        width: wp('60%'),
                        height: hp('30%')
                    }}
                    resizeMode="contain"
                    source={require('../assets/intro/slide-4.png')} />

                <Text style={{
                    fontSize: 20,
                    color: 'grey',
                    paddingHorizontal: '4%',
                    paddingVertical: '4%',
                    fontWeight: 'bold'
                }}>
                    Tell us what's wrong
</Text>

                <View style={{ marginVertical: '5%' }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: '4%' }}>
                        <Icon
                            color="red"
                            name="help"
                            size={30} />
                        <Text style={{ marginLeft: 5, fontSize: 18 }}>Report Technical issue</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginVertical: '6%',
                        paddingHorizontal: '4%'
                    }}>
                        <Icon color="red"
                            name="help" size={30} />
                        <Text style={{
                            marginLeft: 5,
                            fontSize: 18
                        }}>Report billing issue</Text>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: '4%'
                    }}>
                        <Icon color="red"
                            name="help" size={30} />
                        <Text style={{
                            marginLeft: 5,
                            fontSize: 18
                        }}>Suggest an idea </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginVertical: '6%',
                        paddingHorizontal: '4%'
                    }}>
                        <Icon color="red"
                            name="help-circle-outline" size={30} />
                        <Text style={{
                            marginLeft: 5,
                            fontSize: 18
                        }}>Ask a question</Text>
                    </View>

                </View>


            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={{ marginTop: 10, alignSelf: 'center' }}>
                <Text style={{ fontSize: 20, color: 'grey' }}>Cancel</Text>
            </TouchableOpacity>
        </Content>
    )
}
export default ReportProblem;
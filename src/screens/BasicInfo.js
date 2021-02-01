
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Content, Container, Header, Left, Body, Right, Thumbnail } from 'native-base';
import {
    widthPercentageToDP as wp, heightPercentageToDP
        as hp
} from 'react-native-responsive-screen';
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/Ionicons';
import GradientText from '../components/GradientText';
import { RadioButton } from 'react-native-paper';

const BasicInfo = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [checkedGender, setCheckedGender] = useState('Male');
    const [AboutUs, setAboutUs] = useState('');
    const [Name, setName] = useState('Faisal');
    const [Dob, setDob] = useState('16-06-1997');
    const [NametextColor, setNameTextColor] = useState('grey');
    const [DobTextColor, setDobTextColor] = useState('grey');
    return (
        <Container>
            <Content>
                <Header style={{ backgroundColor: '#e3e5e8', elevation: 0 }}>
                    <Left style={{ flex: 1 }} >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                width: '50%',
                                flex: 1,
                                marginLeft: '4%',
                                alignContent: 'center', justifyContent: 'center'
                            }}>
                            <Icon name="arrow-back-outline" size={30} />
                        </TouchableOpacity>
                    </Left>

                    <Body style={{ flex: 1 }}>
                        <Thumbnail square source={require('../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                    </Body>


                    <Right style={{ flex: 1 }} />


                </Header>

                <Text style={styles.basicInfoText}> Basic Info</Text>

                <View style={[styles.NameDOBView, { borderColor: NametextColor }]}>
                    <Text style={{
                        marginLeft: 7,
                        marginTop: -10,
                        backgroundColor: '#fff',
                        color: NametextColor,
                        paddingLeft: 5
                        , width: wp('30%')
                    }}>Enter Your Name</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            value={Name}
                            onChangeText={(value) => setName(value)}
                            onFocus={() => setNameTextColor('#ba066c')}
                            onBlur={() => setNameTextColor('grey')}
                            placeholderTextColor="black"
                            placeholder="Enter Your Name" style={{ flex: 1 }} />
                        <TouchableOpacity style={{ marginTop: 15, marginRight: 10 }}>
                            <Icon name="pencil-outline" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.NameDOBView, { marginTop: 10, borderColor: DobTextColor }]}>
                    <Text style={{
                        marginLeft: 7,
                        marginTop: -10,
                        backgroundColor: '#fff',
                        color: DobTextColor,
                        paddingLeft: 5
                        , width: wp('30%')
                    }}>Enter Date Of Birth</Text>
                    <View style={{ flexDirection: 'row' }}>

                        {/* <TextInput
                            value={Dob}
                            onChangeText={(value) => setDob(value)}
                            onFocus={() => setDobTextColor('#ba066c')}
                            onBlur={() => setDobTextColor('grey')}
                            placeholderTextColor="black"
                            placeholder="John Mikel" style={{ flex: 1 }} /> */}
                        <DatePicker
                            date={date}
                            onDateChange={setDate}
                            onFocus={() => setDobTextColor('#ba066c')}
                            onBlur={() => setDobTextColor('grey')}
                        />
                        <TouchableOpacity style={{ marginTop: 15, marginRight: 10 }}>
                            <Icon name="pencil-outline" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    width: wp('100%'), borderTopWidth: 1,
                    borderTopColor: 'grey', borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    marginTop: 10,
                    paddingTop: 10,
                    paddingBottom: 10
                    // height: 100
                }}>
                    <Text style={{ marginLeft: 25, marginTop: 10 }}>
                        Gender
                </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="Male"
                            color="red"
                            status={checkedGender === 'Male' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedGender('Male')}
                        />
                        <Text style={{ marginTop: 8 }}>Male </Text>
                        <RadioButton
                            color="red"
                            value="Female"
                            status={checkedGender === 'Female' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedGender('Female')}
                        />
                        <Text style={{ marginTop: 8 }}>Female</Text>
                    </View>


                </View>

                <View style={{
                    marginLeft: 25, marginVertical: 10,
                    borderBottomWidth: 1,

                    paddingBottom: 20,
                    borderBottomColor: 'grey'
                }}>
                    <Text style={{ color: 'grey' }}>
                        Greeting Message
                       </Text>
                    <View style={{ marginTop: 20, borderWidth: 1, borderRadius: 10, width: wp('90%') }}>
                        <TextInput onChangeText={text => setAboutUs(text)}
                            placeholder="About Us"
                            multiline
                            numberOfLines={10}

                        />
                    </View>

                </View>

                <View style={{ marginLeft: 25 }}>
                    <Text>
                        Personality Traits
                    </Text>
                </View>



            </Content>
        </Container >
    )
}
export default BasicInfo;
const styles = StyleSheet.create({
    basicInfoText:
    {
        color: 'grey',
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: '3%',
        fontWeight: 'bold',
        backgroundColor: '#e3e5e8',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'

    },
    NameDOBView:
    {
        borderWidth: 1, alignSelf: 'center',
        borderRadius: 10,
        borderColor: 'grey',
        marginTop: 10,
        width: wp('80%'),
        marginVertical: 10,
    }
})
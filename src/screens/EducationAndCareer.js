
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Content, Container, Header, Left, Body, Right, Thumbnail } from 'native-base';
import {
    widthPercentageToDP as wp, heightPercentageToDP
        as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientText from '../components/GradientText';
import { RadioButton } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
import ScreenInsideProfileHeader from '../components/ScreensInsideProfileHeader';
const EducationAndCareer = ({ navigation }) => {
    const [checkedEducation, setCheckedEducation] = useState('Matric');
    const [checkedProfession, setCheckedProfession] = useState('Doctor');
    const [isEmployeer, setIsEmployeer] = useState(false);


    return (
        <Container>
            <Content style={{ flex: 1 }}>
                {/* <Header style={{ backgroundColor: '#e3e5e8', elevation: 0 }}>
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

                <Text style={styles.basicInfoText}> Education And Career</Text> */}
                <ScreenInsideProfileHeader text="Education And Career" navigation={navigation} />
                <View style={{
                    marginLeft: 10, borderBottomWidth: 1,
                    borderBottomColor: 'grey', paddingBottom: 10, paddingTop: 10
                }}>

                    <Text style={{ fontSize: 18, marginLeft: 10 }}>Education </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            value="Matric"
                            color="red"
                            status={checkedEducation === 'Matric' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedEducation('Matric')}
                        />
                        <Text style={{ marginTop: 8 }}>Matric </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            color="red"
                            value="Female"
                            status={checkedEducation === 'Intermediate' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedEducation('Intermediate')}
                        />
                        <Text style={{ marginTop: 8 }}> Intermediate</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            color="red"
                            value="Graduation"
                            status={checkedEducation === 'Graduation' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedEducation('Graduation')}
                        />
                        {console.log(checkedEducation)}
                        <Text style={{ marginTop: 8 }}> Graduation</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            color="red"
                            value="Master"
                            status={checkedEducation === 'Master' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedEducation('Master')}
                        />

                        <Text style={{ marginTop: 8 }}> Master</Text>
                    </View>

                </View>

                <View style={{
                    marginLeft: 10, borderBottomWidth: 1,
                    borderBottomColor: 'grey', paddingBottom: 10, paddingTop: 10
                }}>

                    <Text style={{ fontSize: 18, marginLeft: 10 }}>Profession </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            value="Doctor"
                            color="red"
                            status={checkedProfession === 'Doctor' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedProfession('Doctor')}
                        />
                        <Text style={{ marginTop: 8 }}>Doctor </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            color="red"
                            value="Engineer"
                            status={checkedProfession === 'Engineer' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedProfession('Engineer')}
                        />
                        <Text style={{ marginTop: 8 }}> Engineer</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            color="red"
                            value="Teacher"
                            status={checkedProfession === 'Teacher' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedProfession('Teacher')}
                        />
                        {console.log(checkedProfession)}
                        <Text style={{ marginTop: 8 }}> Teacher</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            color="red"
                            value="Lawyer"
                            status={checkedProfession === 'Lawyer' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedProfession('Master')}
                        />

                        <Text style={{ marginTop: 8 }}> Lawyer</Text>
                    </View>

                </View>

                <View style={{
                    borderBottomColor: 'grey', borderBottomWidth: 1
                    , borderTopColor: 'grey', borderTopWidth: 1, flexDirection: 'row'
                    , padding: 10
                }}>
                    <Text style={{ padding: 20, flex: 1 }}>Employeer</Text>

                    <ToggleSwitch

                        isOn={isEmployeer}
                        onColor="red"
                        offColor="grey"
                        size="medium"
                        onToggle={isOn =>
                            setIsEmployeer(!isEmployeer)

                        }

                    />

                </View>






            </Content>
        </Container>
    )
}

export default EducationAndCareer;

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
})
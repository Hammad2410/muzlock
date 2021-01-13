import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import Logo from '../components/Logo';

const Settings = ({ navigation }) => {
    const [email, setEmail] = useState('abc@gmail.com');
    const [fbToggle, setFbToggle] = useState(false);
    const [Notifications, setNotifications] = useState(false);
    return (
        <Content contentContainerStyle={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                <TouchableOpacity style={{ marginLeft: '4%', marginTop: '4%', }}>
                    <Icon name="close-outline" size={30} />
                </TouchableOpacity>
                <Image
                    style={{
                        width: wp('20%'), height: hp('8%'),
                        marginLeft: '30%'
                    }}
                    source={require('../assets/logo.png')} />
            </View>
            <View style={{ backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 20, justifyContent: 'center', marginTop: '4%', alignSelf: 'center', fontWeight: 'bold' }}> Settings</Text>

                {/* Email        */}
                <View style={styles.settinginnerview}>
                    <Icon name="mail" size={30} color="red" />
                    <Text style={{ marginTop: '2%', marginLeft: '-50%' }}>{email} </Text>
                    <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="pencil" size={30} />
                    </TouchableOpacity>
                </View>

                {/* NumberVerification */}

                <View style={[styles.settinginnerview, { marginTop: '2%' }]}>
                    <Icon name="call" size={30} color="red" />
                    <Text style={{ marginTop: '2%', marginLeft: '-45%' }}>Number Verification </Text>
                    <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="pencil" size={30} />
                    </TouchableOpacity>
                </View>

                {/* Login With Facebook */}

                <View style={[styles.settinginnerview, { marginTop: '2%' }]}>
                    <Icon name="logo-facebook" size={30} color="blue" />
                    <Text style={{ marginTop: '2%', marginLeft: '-40%' }}>Login in With facebook </Text>
                    {/* <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="pencil" size={30} />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setFbToggle(!fbToggle)}>
                        <ToggleSwitch
                            isOn={fbToggle}
                            onColor="green"
                            offColor="grey"
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}

                        />
                    </TouchableOpacity>
                </View>



            </View>

            {/* Notifications */}
            <View style={[styles.settinginnerview, {
                flex: 1,
                height: '8%', alignItems: 'center',
                backgroundColor: '#fff', marginTop: '7%'
            }]}>
                <Icon name="notifications" size={30} color="red" />
                <Text style={{ marginTop: '2%', marginLeft: '-50%' }}>Notifications</Text>
                {/* <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="pencil" size={30} />
                    </TouchableOpacity> */}
                <TouchableOpacity onPress={() => setNotifications(!Notifications)}>
                    <ToggleSwitch
                        isOn={Notifications}
                        onColor="green"
                        offColor="grey"
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}

                    />
                </TouchableOpacity>
            </View>

            {/* Privacy Policy */}


            <View style={[styles.settinginnerview, {
                flex: 1,
                height: '8%', alignItems: 'center',
                backgroundColor: '#fff', marginTop: '7%'
            }]}>
                <Icon name="notifications" size={30} color="red" />
                <Text style={{ marginTop: '2%', marginLeft: '-50%' }}>Privacy Policy</Text>
                {/* <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="pencil" size={30} />
                    </TouchableOpacity> */}
                <TouchableOpacity onPress={() => alert('Clicked Privacy ')}>
                    <Icon name="chevron-forward" size={20} />
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                height: '8%', alignItems: 'center',
                backgroundColor: '#fff', marginTop: '7%'
            }}>
                <Icon name="eye" size={30} color="red" />
                <Text style={{ marginLeft: '4%' }}> Wali</Text>
                {/* <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="pencil" size={30} />
                    </TouchableOpacity> */}
                <TouchableOpacity
                    style={{ marginLeft: '70%', flexDirection: 'row' }}
                    onPress={() => alert('Clicked Privacy ')}>
                    <Text style={{ marginTop: '2%', marginLeft: '-1%' }} >Disabled</Text>
                    <Icon style={{ marginLeft: '2%' }}
                        name="chevron-forward" size={20} />
                </TouchableOpacity>
            </View>


            {/* LOck on exit */}

            <View style={{
                flex: 1,
                flexDirection: 'row',
                height: '8%', alignItems: 'center',
                backgroundColor: '#fff', marginTop: '7%'
            }}>
                <Icon name="lock-closed" size={30} color="red" />
                <Text style={{ marginLeft: '4%' }}> Lock on exit</Text>
                {/* <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="pencil" size={30} />
                    </TouchableOpacity> */}
                <TouchableOpacity
                    style={{ marginLeft: '60%', flexDirection: 'row' }}
                    onPress={() => alert('Clicked Privacy ')}>
                    <Text style={{ marginTop: '2%', marginLeft: '-1%' }} >Disabled</Text>
                    <Icon style={{ marginLeft: '2%' }}
                        name="chevron-forward" size={20} />
                </TouchableOpacity>
            </View>


            {/* Language */}

            <View style={{
                flex: 1,
                flexDirection: 'row',
                height: '8%', alignItems: 'center',
                backgroundColor: '#fff', marginTop: '7%'
            }}>
                <Icon name="language" size={30} color="red" />
                <Text style={{ marginLeft: '4%' }}> Language</Text>
                {/* <TouchableOpacity onPress={() => alert('Clicked')}>
                        <Icon name="pencil" size={30} />
                    </TouchableOpacity> */}
                <TouchableOpacity
                    style={{ marginLeft: '60%', flexDirection: 'row' }}
                    onPress={() => alert('Clicked Privacy ')}>
                    <Text style={{ marginTop: '2%', marginLeft: '-1%' }} >English</Text>
                    <Icon style={{ marginLeft: '2%' }}
                        name="chevron-forward" size={20} />
                </TouchableOpacity>
            </View>





        </Content>
    )
}
export default Settings;

const styles = StyleSheet.create({
    settinginnerview:
    {
        flexDirection: 'row', justifyContent: 'space-between'
    }
})
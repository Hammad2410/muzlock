import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import Logo from '../components/Logo';
import SettingComponent, { SettingTwoName } from '../components/SettingsComponent';

const Settings = ({ navigation }) => {
    const [email, setEmail] = useState('abc@gmail.com');
    const [fbToggle, setFbToggle] = useState(false);
    const [Notifications, setNotifications] = useState(false);
    const [VERSION, setVERSION] = useState('v6 1.9990');



    const LanguageHandler = () => {
        alert('Language');
    }
    const LockOnExitHandler = () => {
        alert('Lock oN Exit')
    }
    return (
        <ScrollView>
            <Content contentContainerStyle={{ flex: 1 }}>

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff'
                }}>
                    <TouchableOpacity style={{
                        width: '50%',
                        flex: 1,
                        marginLeft: '4%',
                        alignContent: 'center', justifyContent: 'center'
                    }}>
                        <Icon name="close-outline" size={30} />
                    </TouchableOpacity>
                    <Image
                        style={{
                            marginHorizontal: '25%',
                            width: wp('23%'), height: hp('8%'),
                            alignSelf: 'center'
                        }}
                        source={require('../assets/logo.png')} />
                </View>
                <View style={{ backgroundColor: '#fff' }}>
                    <Text style={{
                        fontSize: 20, justifyContent: 'center',
                        marginTop: '4%', alignSelf: 'center',
                        fontWeight: 'bold'
                    }}> Settings</Text>

                    {/* Email        */}

                    <SettingComponent
                        iconLeft="mail" textName={email}
                        iconRight="pencil" iconLeftColor="red"
                        iconRightColor="grey" />


                    {/* NumberVerification */}

                    <SettingComponent
                        iconLeft="help" textName="Number Verification"
                        iconRight="pencil" iconLeftColor="red" iconRightColor="grey" />



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


                <View>
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
                </View>

                {/* Privacy Policy */}

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="notifications"
                        textName="Privacy Policy" iconRight="chevron-forward" iconLeftColor="red" iconRightColor="grey" />
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

                <View style={{ marginTop: '4%' }}>
                    <SettingTwoName iconLeftName="lock-closed"
                        textFirstName="Lock on exit"
                        textSecondName="Disabled"
                        iconRightName="chevron-forward"
                        iconLeftClr="red"
                        iconRightClr="grey"
                        handler={LockOnExitHandler}
                    />
                </View>




                {/* Language */}

                <View style={{ marginTop: '4%' }}>
                    <SettingTwoName iconLeftName="language"
                        textFirstName="Language" textSecondName="English"
                        iconRightName="chevron-forward"
                        iconLeftClr="red" iconRightClr="grey"
                        handler={LanguageHandler} />
                </View>





                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="share-social" textName="Share Muzlock" iconRight="chevron-forward" iconLeftColor="red" iconRightColor="grey" />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="help" textName="Color Settings" iconRight="chevron-forward" iconLeftColor="red" iconRightColor="grey" />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="alert" textName="Report Problem" iconRight="chevron-forward" iconLeftColor="red" iconRightColor="grey" />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="help" textName="Feedback And Review" iconRight="chevron-forward" iconLeftColor="red" iconRightColor="grey" />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="settings" textName="Account" iconRight="chevron-forward" iconLeftColor="grey" iconRightColor="grey" />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="log-out" textName="Log Out" iconRight="chevron-forward" iconLeftColor="red" iconRightColor="grey" />
                </View>

                <View style={{ marginTop: '6%', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <Text style={{
                        marginVertical: '3%',
                        alignSelf: 'center'
                    }}>Stay Up to date,Follow us on </Text>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: '6%',
                        justifyContent: 'center', alignSelf: 'center'
                    }}>

                        <TouchableOpacity>
                            <Icon name="logo-twitter" size={30} color="#24eaed" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icon name="logo-instagram" size={30} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="logo-facebook" size={30} color="blue" />
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: '1%', color: 'grey' }}>Version</Text>
                        <Text style={{ marginRight: '1%', color: 'grey' }}>{VERSION}</Text>
                    </View>

                </View>


            </Content>
        </ScrollView >
    )
}
export default Settings;

const styles = StyleSheet.create({
    settinginnerview:
    {
        flexDirection: 'row', justifyContent: 'space-between'
    }
})
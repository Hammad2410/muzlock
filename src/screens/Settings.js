import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import { Content, Header, Right, Left, Body, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import Logo from '../components/Logo';
import SettingComponent, { SettingTwoName } from '../components/SettingsComponent';
import IconTextToggle from '../components/IconTextToggle';
const Settings = ({ navigation }) => {
    const [email, setEmail] = useState('abc@gmail.com');
    const [fbToggle, setFbToggle] = useState(false);
    const [Notifications, setNotifications] = useState(false);
    const [VERSION, setVERSION] = useState('v6 1.9990');
    const [wali, setWali] = useState(false);

    const WaliHandler = () => {
        navigation.navigate('Wali')
        setWali(!wali)
    }
    const LockOnExitHandler = () => {

        navigation.navigate('LockOnExit')
    }
    const PrivacyPolicyHandler = () => {
        navigation.navigate('PrivacyPolicy')
    }
    const ShareMazlockHandler = () => {
        alert('Muzlock')
    }
    const ColorSettingHandler = () => {

        navigation.navigate('ColorSettings')
    }
    const ReportProblemHandler = () => {
        alert('Report Problem')
        navigation.navigate('ReportProblem')
    }
    const FeedbackAndReviewHandler = () => {
        alert('FeedbackAndReview')
    }


    const LanguageHandler = () => {
        alert('Language');
    }
    const FbToggleHandler = () => {
        setFbToggle(!fbToggle)
    }
    const NotificationsHandler = () => {
        setNotifications(!Notifications)
    }
    const AccountHandler = () => {
        navigation.navigate('Account')
    }
    return (
        <ScrollView>
            <Content contentContainerStyle={{ flex: 1, }}>
                <Header style={{ backgroundColor: '#fff', elevation: 0 }}>
                    <Left style={{ flex: 1 }} >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                width: '50%',
                                flex: 1,
                                marginLeft: '4%',
                                alignContent: 'center', justifyContent: 'center'
                            }}>
                            <Icon name="close-outline" size={30} />
                        </TouchableOpacity>
                    </Left>

                    <Body style={{ flex: 1 }}>
                        <Thumbnail square source={require('../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                    </Body>


                    <Right style={{ flex: 1 }} />


                </Header>

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
                        iconRightColor="grey"
                        handler={ShareMazlockHandler}
                    />


                    {/* NumberVerification */}

                    <SettingComponent
                        iconLeft="help" textName="Number Verification"
                        iconRight="pencil" iconLeftColor="red"
                        iconRightColor="grey"
                        handler={ShareMazlockHandler}
                    />



                    {/* Login With Facebook */}

                    <View style={[styles.settinginnerview,
                    { flexDirection: 'row', flex: 1 }]}>


                        <IconTextToggle icon="logo-facebook" name="Login With Facebook"
                            itemState={fbToggle}
                            ToggleHandler={FbToggleHandler}
                            size={30}
                            color="blue"
                        />



                    </View>



                </View>



                {/* Notifications */}
                <View style={[styles.settinginnerview, {
                    flex: 1,
                    height: '8%', alignItems: 'center',
                    backgroundColor: '#fff',
                    marginTop: '7%'
                }]}>
                    <IconTextToggle icon="notifications" name="Notifications"
                        itemState={Notifications}
                        ToggleHandler={NotificationsHandler}
                        size={30}
                        color="red"
                    />
                </View>


                {/* Privacy Policy */}

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="notifications"
                        textName="Privacy Policy"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey"
                        handler={PrivacyPolicyHandler}
                    />
                </View>


                <View style={{ marginTop: '4%' }}>
                    <SettingTwoName iconLeftName="eye"
                        textFirstName="Wali"
                        textSecondName="Disabled"
                        iconRightName="chevron-forward"
                        iconLeftClr="red"
                        iconRightClr="grey"
                        handler={WaliHandler}
                    />
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
                    <SettingComponent iconLeft="share-social"
                        textName="Share Muzlock" iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" handler={ShareMazlockHandler} />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="help" textName="Color Settings"
                        iconRight="chevron-forward" iconLeftColor="red"
                        iconRightColor="grey" handler={ColorSettingHandler} />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="alert" textName="Report Problem"
                        iconRight="chevron-forward" iconLeftColor="red"
                        iconRightColor="grey" handler={ReportProblemHandler} />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="help" textName="Feedback And Review"
                        iconRight="chevron-forward" iconLeftColor="red"
                        iconRightColor="grey" handler={FeedbackAndReviewHandler} />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="settings" textName="Account"
                        iconRight="chevron-forward" iconLeftColor="grey"
                        iconRightColor="grey" handler={AccountHandler} />
                </View>
                <View style={{ marginTop: '4%' }}>
                    <SettingComponent iconLeft="log-out" textName="Log Out"
                        iconRight="chevron-forward" iconLeftColor="red"
                        iconRightColor="grey" handler={ShareMazlockHandler} />
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
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5
    }
})
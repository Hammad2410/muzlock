import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native';
import Logo from '../components/Logo';
import Preferences from '../components/Preferences';
const Filter = ({ navigation }) => {
    const [HideBlurredPhotos, setHideBlurredPhotos] = useState(false);
    const [haveChildren, setHaveChildren] = useState(false);
    return (
        <ScrollView>
            <Content contentContainerStyle={{ flex: 1 }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>

                    <TouchableOpacity style={{
                        justifyContent: 'center',
                    }} >
                        <Icon name="chevron-back" size={30} />
                    </TouchableOpacity>

                    <Image source={require('../assets/logo.png')}
                        style={{
                            width: wp('28%'), height: hp('8%'),
                            alignSelf: 'center',
                        }} />

                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, color: 'red' }}>Clear All</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ justifyContent: 'center', marginTop: '6%' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Filter</Text>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: '2%'
                    }}>Setup filters you would like your potential matches </Text>
                    <Text style={{ textAlign: 'center' }}>to have</Text>
                </View>


                <Preferences icon="location" name="Location" subname="No Limit" iconcolor="red" />

                <Preferences icon="help" name="Age" subname="Any Age" iconcolor="red" />



                <Preferences icon="star-half" name="Sect" subname="All" iconcolor="red" />


                <Preferences icon="flag" name="Ethnicity" subname="Limit Location by" iconcolor="red" />



                <View style={{ flexDirection: 'row', marginTop: '6%', width: wp('100%'), }}>
                    <Icon style={{ marginLeft: '4%' }} name="lock-closed" size={30}
                        color="red" />
                    <View style={{ marginLeft: '2%', flex: 1 }}>
                        <Text style={{
                            marginTop: '2%',
                            alignItems: 'center', fontSize: 16,
                            fontFamily: 'Questrial-Regular'
                        }}>Hide Blurred Photos </Text>

                    </View>


                    <ToggleSwitch

                        isOn={HideBlurredPhotos}
                        onColor="red"
                        offColor="grey"
                        size="medium"
                        onToggle={isOn => setHideBlurredPhotos(!HideBlurredPhotos)}

                    />

                    {/* <TouchableOpacity
                    onPress={() => setHideBlurredPhotos(!HideBlurredPhotos)}>
                    <ToggleSwitch
                        isOn={HideBlurredPhotos}
                        onColor="green"
                        offColor="grey"
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />

                </TouchableOpacity> */}
                </View>

                <View style={{ marginTop: '6%', }}>
                    <View >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Preferences</Text>
                    </View>
                    <View style={{ marginTop: '3%' }}>
                        <Text style={{ alignSelf: 'center' }}>See profiles that match these   </Text>
                    </View>
                </View>

                {/* MArital Status */}
                <Preferences icon="reload" name="Marital Status"
                    subname="All" iconcolor="yellow" />


                {/* Education */}


                <Preferences icon="help" name="Education"
                    subname="All" iconcolor="yellow" />

                {/* <View style={{ flexDirection: 'row', marginTop: '6%', width: wp('100%'), }}>
                    <Icon style={{ marginLeft: '4%' }} name="help"
                        size={30} color="yellow" />
                    <View style={{ marginLeft: '2%', flex: 1 }}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: 'Questrial-Regular'
                        }}>Education </Text>
                        <Text>All</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon
                            style={{ marginLeft: '5%' }}
                            name="chevron-forward" size={30} />
                    </TouchableOpacity>
                </View> */}

                {/* Willing to relocate */}

                <Preferences icon="people" name="Willing to relocate" subname="All" iconcolor="yellow" />


                {/* Previously Married  */}

                <Preferences icon="people" name="Previously Married" subname="All" iconcolor="yellow" />


                {/* Without Children */}


                <View style={{ flexDirection: 'row', marginTop: '6%', width: wp('100%'), }}>
                    <Icon style={{ marginLeft: '4%' }} name="help"
                        size={30}
                        color="yellow" />
                    <View style={{ marginLeft: '2%', flex: 1 }}>
                        <Text style={{
                            marginTop: '2%',
                            alignItems: 'center', fontSize: 16,
                            fontFamily: 'Questrial-Regular'
                        }}>Without Children</Text>

                    </View>


                    <ToggleSwitch

                        isOn={haveChildren}
                        onColor="yellow"
                        offColor="grey"
                        size="medium"
                        onToggle={isOn => setHaveChildren(!haveChildren)}
                    />

                </View>
                <Preferences icon="people" name="Height" subname="Any Height" iconcolor="yellow" />

                <Preferences icon="help" name="Marriage Plans" subname="Any timeframe" iconcolor="yellow" />

                <Preferences icon="help" name="Prayer Level" subname="All" iconcolor="yellow" />

                <Preferences icon="star" name="Religiousity" subname="All religiousties" iconcolor="yellow" />

                <Preferences icon="help" name="Hijab" subname="All" iconcolor="yellow" />
                <Preferences icon="globe" name="Language" subname="All" iconcolor="yellow" />

                <Preferences icon="beer" name="Drinking" subname="All" iconcolor="yellow" />

                <Preferences icon="help" name="Smoking" subname="All" iconcolor="yellow" />
            </Content>
        </ScrollView>
    )
}
export default Filter;
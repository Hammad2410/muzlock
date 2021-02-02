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

const MarriagePlans = ({ navigation }) => {
    const [marriagePlan, setMarriagePlan] = useState('');
    return (
        <Container>
            <Content>
                <ScreenInsideProfileHeader text="Marriage Plans" navigation={navigation} />
                <View style={{
                    borderBottomColor: 'grey', borderBottomWidth: 1,
                    paddingBottom: '6%'
                }}>
                    <View style={{
                        marginTop: 20, borderWidth: 1, alignSelf: 'center',
                        borderRadius: 10, width: wp('90%'),
                        // borderBottomColor: 'grey',

                    }}>
                        <TextInput
                            value={marriagePlan}
                            onChangeText={text => setMarriagePlan(text)}
                            placeholder="Describe your marriage Plans"
                            multiline
                            numberOfLines={10}

                        />
                    </View>
                </View>
            </Content>
        </Container>
    )
}
export default MarriagePlans;
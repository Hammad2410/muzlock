
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

const MaritalStatus = ({ navigation }) => {
    const [MaritalStatus, setMaritalStatus] = useState('');
    return (
        <Container>
            <Content style={{ flex: 1 }}>
                <ScreenInsideProfileHeader text="Marital Status" navigation={navigation} />
                <View style={styles.ItemsView}>

                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="Single"
                            color="red"
                            status={MaritalStatus === 'Single' ? 'checked' : 'unchecked'}
                            onPress={() => setMaritalStatus('Single')}
                        />
                        <Text style={{ marginTop: 8 }}>Single </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Divorced"
                            status={MaritalStatus === 'Divorced' ? 'checked' : 'unchecked'}
                            onPress={() => setMaritalStatus('Divorced')}
                        />
                        <Text style={{ marginTop: 8 }}>Divorced</Text>
                    </View>
                </View>

            </Content>
        </Container>
    )
}
export default MaritalStatus;

const styles = StyleSheet.create({
    ItemsView:
    {
        width: wp('100%'),
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10
        // height: 100
    }
})
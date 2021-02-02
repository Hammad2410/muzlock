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

const Relocation = ({ navigation }) => {
    const [Relocations, setRelocations] = useState('');
    return (
        <Container>
            <Content style={{ flex: 1 }}>
                <ScreenInsideProfileHeader text="Relocation" navigation={navigation} />
                <View style={styles.ItemsView}>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Yes"
                            status={Relocations === 'Yes' ? 'checked' : 'unchecked'}
                            onPress={() => setRelocations('Yes')}
                        />
                        <Text style={{ marginTop: 8 }}>Yes </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="No"
                            status={Relocations === 'No' ? 'checked' : 'unchecked'}
                            onPress={() => setRelocations('No')}
                        />
                        <Text style={{ marginTop: 8 }}>No </Text>
                    </View>

                </View>

            </Content>
        </Container>
    )
}
export default Relocation;
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

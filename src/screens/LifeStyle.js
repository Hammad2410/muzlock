
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

const LifeStyle = ({ navigation }) => {
    const [Sect, setSect] = useState('');
    const [Revert, setRevert] = useState('');
    const [Religiosity, setReligiosity] = useState('');
    const [Prayers, setPrayers] = useState('');
    const [Halal, setHalal] = useState('');
    const [Drinking, setDrinking] = useState('');
    const [Smoking, setSmoking] = useState('');
    return (
        <Container>
            <Content style={{ flex: 1 }}>
                <ScreenInsideProfileHeader text="Life Style" navigation={navigation} />
                <View style={styles.ItemsView}>
                    <Text style={{ marginLeft: 25, marginTop: 10 }}>
                        Sect
                </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="Shia"
                            color="red"
                            status={Sect === 'Shia' ? 'checked' : 'unchecked'}
                            onPress={() => setSect('Shia')}
                        />
                        <Text style={{ marginTop: 8 }}>Shia </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Sunni"
                            status={Sect === 'Sunni' ? 'checked' : 'unchecked'}
                            onPress={() => setSect('Sunni')}
                        />
                        <Text style={{ marginTop: 8 }}>Sunni</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Other"
                            status={Sect === 'Other' ? 'checked' : 'unchecked'}
                            onPress={() => setSect('Other')}
                        />
                        <Text style={{ marginTop: 8 }}>Other</Text>
                    </View>

                </View>


                <View style={styles.ItemsView}>
                    <Text style={{ marginLeft: 25, marginTop: 10 }}>
                        Convert/Revert
                </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="Yes"
                            color="red"
                            status={Revert === 'Yes' ? 'checked' : 'unchecked'}
                            onPress={() => setRevert('Yes')}
                        />
                        <Text style={{ marginTop: 8 }}>Yes </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="No"
                            status={Revert === 'No' ? 'checked' : 'unchecked'}
                            onPress={() => setRevert('No')}
                        />
                        <Text style={{ marginTop: 8 }}>No</Text>
                    </View>

                </View>



                <View style={styles.ItemsView}>
                    <Text style={{ marginLeft: 25, marginTop: 10 }}>
                        Religiosity
                </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="Yes"
                            color="red"
                            status={Religiosity === 'Yes' ? 'checked' : 'unchecked'}
                            onPress={() => setReligiosity('Yes')}
                        />
                        <Text style={{ marginTop: 8 }}>Yes </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="No"
                            status={Religiosity === 'No' ? 'checked' : 'unchecked'}
                            onPress={() => setReligiosity('No')}
                        />
                        <Text style={{ marginTop: 8 }}>No</Text>
                    </View>




                </View>


                <View style={styles.ItemsView}>
                    <Text style={{ marginLeft: 25, marginTop: 10 }}>
                        Prayers
                </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="One TIme"
                            color="red"
                            status={Prayers === 'One Time' ? 'checked' : 'unchecked'}
                            onPress={() => setPrayers('One Time')}
                        />
                        <Text style={{ marginTop: 8 }}>One Time </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Two Times"
                            status={Prayers === 'Two Times' ? 'checked' : 'unchecked'}
                            onPress={() => setPrayers('Two Times')}
                        />
                        <Text style={{ marginTop: 8 }}>Two Times</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Three Times"
                            status={Prayers === 'Three Times' ? 'checked' : 'unchecked'}
                            onPress={() => setPrayers('Three Times')}
                        />
                        <Text style={{ marginTop: 8 }}>Three Times</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Four Times"
                            status={Prayers === 'Four Times' ? 'checked' : 'unchecked'}
                            onPress={() => setPrayers('Four Times')}
                        />
                        <Text style={{ marginTop: 8 }}>Four Times</Text>
                    </View>


                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Five Times"
                            status={Prayers === 'Five Times' ? 'checked' : 'unchecked'}
                            onPress={() => setPrayers('Five Times')}
                        />
                        <Text style={{ marginTop: 8 }}>Five Times</Text>
                    </View>


                </View>



                <View style={styles.ItemsView}>
                    <Text style={{ marginLeft: 25, marginTop: 10 }}>
                        Halal Food
                </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="Yes"
                            color="red"
                            status={Halal === 'Yes' ? 'checked' : 'unchecked'}
                            onPress={() => setHalal('Yes')}
                        />
                        <Text style={{ marginTop: 8 }}>Yes </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="No"
                            status={Halal === 'No' ? 'checked' : 'unchecked'}
                            onPress={() => setHalal('No')}
                        />
                        <Text style={{ marginTop: 8 }}>No</Text>
                    </View>




                </View>


                <View style={styles.ItemsView}>
                    <Text style={{ marginLeft: 25, marginTop: 10 }}>
                        Drinking
                </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="Yes"
                            color="red"
                            status={Drinking === 'Yes' ? 'checked' : 'unchecked'}
                            onPress={() => setDrinking('Yes')}
                        />
                        <Text style={{ marginTop: 8 }}>Yes </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="No"
                            status={Drinking === 'No' ? 'checked' : 'unchecked'}
                            onPress={() => setDrinking('No')}
                        />
                        <Text style={{ marginTop: 8 }}>No</Text>
                    </View>
                </View>




                <View style={styles.ItemsView}>
                    <Text style={{ marginLeft: 25, marginTop: 10 }}>
                        Smoking
                </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="Yes"
                            color="red"
                            status={Smoking === 'Yes' ? 'checked' : 'unchecked'}
                            onPress={() => setSmoking('Yes')}
                        />
                        <Text style={{ marginTop: 8 }}>Yes </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="No"
                            status={Smoking === 'No' ? 'checked' : 'unchecked'}
                            onPress={() => setSmoking('No')}
                        />
                        <Text style={{ marginTop: 8 }}>No</Text>
                    </View>
                </View>






















            </Content>
        </Container>
    )
}
export default LifeStyle;

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
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const btn = StyleSheet.create({
    bottomBtn:
    {
        marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#eb3f50',
        width: wp('40%'),
        borderRadius: 25,
        //height: 50,
        backgroundColor: '#f2384a',
        paddingVertical: 10
    }
})
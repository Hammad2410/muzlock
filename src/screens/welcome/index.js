// import React, { useRef, useState } from 'react';
// import { Content, Button, Container } from 'native-base';
// import Swiper from '../../components/Swiper';
// import { View, TouchableOpacity, Text } from 'react-native';
// import styles from './styles';
// import GradientText from '../../components/GradientText';


// function welcome(props) {

//     const [idActive, setIdActive] = useState()

//     const swiper = useRef(null)

//     const onPressNext = () => {
//         if (idActive == 3) {
//             //  _onDone();

//             return
//         }
//         swiper.current.scrollBy(1);
//     }

//     const onPressBack = () => {

//         swiper.current.scrollBy(-1);
//     }


//     return (

//         <Content contentContainerStyle={{ flex: 1 }}>
//             <Swiper
//                 dot={<View style={styles.dot} />}
//                 activeDot={<View style={styles.activedot} />}
//                 loop={false}
//                 ref={swiper}
//                 onIndexChanged={(index) => setIdActive(index)}>
//                 <View style={styles.IntroView}>
//                     <GradientText />
//                     <Text style={styles.title}>Discover & Meet Single Muslims Nearby</Text>
//                     {/* <Image
//                         resizeMode="contain"
//                         style={{
//                             position: "absolute",
//                             marginTop: heightPercentageToDP("20%"),
//                             height: heightPercentageToDP("50%"),
//                             width: widthPercentageToDP("55%")
//                         }} */}
//                     {/* // source={require("../../images/appIntro/4.png")} 
//                         /> */}
//                 </View>


//                 <View style={styles.IntroView}>
//                     <Text style={styles.title}>If other user also like your request then its a match</Text>
//                     {/* <Image
//                         resizeMode="contain"
//                         style={{
//                             position: "absolute",
//                             marginTop: heightPercentageToDP("20%"),
//                             height: heightPercentageToDP("50%"),
//                             width: widthPercentageToDP("55%")
//                         }}
//                         source={require("../../images/appIntro/1.png")} /> */}
//                 </View>

//                 <View style={styles.IntroView}>
//                     <Text style={styles.title}>Unlimited Audio/Video Calls without compromising your privacy</Text>
//                     {/* <Image
//                         resizeMode="contain"
//                         style={{
//                             position: "absolute",
//                             marginTop: heightPercentageToDP("20%"),
//                             height: heightPercentageToDP("50%"),
//                             width: widthPercentageToDP("55%")
//                         }}
//                         source={require("../../images/appIntro/2.png")} /> */}
//                 </View>

//                 <View style={styles.IntroView}>
//                     <Text style={styles.title}>Go premium for an extra boost</Text>
//                     {/* <Image
//                         resizeMode="contain"
//                         style={{
//                             position: "absolute",
//                             marginTop: heightPercentageToDP("20%"),
//                             height: heightPercentageToDP("50%"),
//                             width: widthPercentageToDP("55%")
//                         }}
//                         source={require("../../images/appIntro/3.png")} /> */}
//                 </View>
//             </Swiper>
//             <View style={{ flexDirection: 'row', marginVertical: 50, justifyContent: 'space-around' }}>
//                 {idActive != 0 && <Button
//                     onPress={() => onPressBack()}
//                     rounded
//                     block
//                     style={styles.IntroBtn}>
//                     <Text style={styles.IntroText}>{'Previous'}</Text>
//                 </Button>}
//                 <Button
//                     onPress={() => onPressNext()}
//                     rounded
//                     block
//                     style={styles.IntroBtn}>
//                     <Text style={styles.IntroText}>{idActive === 3 || idActive === 0 ? 'Get Started' : 'Next'}</Text>
//                 </Button>
//             </View>
//             {/* <TouchableOpacity onPress={() => _onDone()}>
//                     <Text style={[styles.skipText]}>Skip</Text>
//                 </TouchableOpacity> */}
//         </Content>
//     )
// }

// export default welcome
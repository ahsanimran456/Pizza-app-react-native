import {
    Text,
    View,
    Image,
} from 'react-native';
function Splash() {
    return (
        <View style={{flex:1}}>
            <Image style={{width:100,height:110}} source={require("../../Assests/images/img.png")} />
            <Text>
                hello 
            </Text>
        </View>
    );
}

export default Splash;
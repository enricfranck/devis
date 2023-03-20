import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ImageSourcePropType, GestureResponderEvent, StyleProp, ViewStyle, ImageStyle } from "react-native/types";


const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45px;
    width: 45px;
    border-radius: 15px
`;

const StyledImage = styled.Image`
    resize-mode: cover;
    height: ${100}%;
    width: ${100}%;
    border-radius: 15px
`;

interface ProfileProps{
    img: ImageSourcePropType
    imgStyles?: StyleProp<ImageStyle>
    imageContainerStyle?: StyleProp<ViewStyle>
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
return(
    <StyledView onPress={props.onPress} style={props.imageContainerStyle}> 
        <StyledImage style={props.imgStyles} source={props.img}/>
    </StyledView>
);
};
export default Profile;
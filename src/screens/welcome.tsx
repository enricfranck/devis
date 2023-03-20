import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../components/colors";
import { Container } from "../components/shared";
import { Text } from "react-native";
import SmallText from "../components/texts/SmallText"
import BigText from "../components/texts/BigText";
import RegularButtons from "../components/Buttons/RegularButtons";

import background from "./../../assets/bgs/background_v1.png"
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">

const TopSection = styled.View`
    width: ${100}%; 
    flex: 1
    max-height: ${55}%;
`;

const TopImage =  styled.Image`
    width: ${100}%;
    height: ${100}%;
    resize-mode: stretch;
`


const BottomSection = styled.View`
    width: ${100}%; 
    justify-content: flex-end; 
    padding: 25px;
    flex: 1
`;

const WelcomContainer = styled(Container)`
    background-color: ${colors.secondary}; 
    justify-content: space-between; 
    width: ${100}%; 
    height: ${100}%; 
`;

const Welcome: FunctionComponent<Props> = ({navigation}) => {
return(
    <>
        <StatusBar style="light"/>
        <WelcomContainer>
            <TopSection>
                <TopImage source={background}/>
            </TopSection>
            <BottomSection>
                <BigText textStyles={{width: '70%', marginBottom: 25}}>
                    Best way to trak your money
                </BigText>
                <SmallText textStyles={{width: '70%', marginBottom: 25}}>
                    Best payment method, connect your money to your friends, family
                </SmallText>
                <RegularButtons onPress={()=> {navigation.navigate('Home')}}>
                    Get Started
                </RegularButtons>
            </BottomSection>
        </WelcomContainer>
    </>
);
};
export default Welcome;
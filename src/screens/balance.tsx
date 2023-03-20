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
import AmountSection from "../components/balance/amountSection";
import BalanceCardSection from "../components/balance/balanceCardSection";
import ButtonSection from "../components/balance/buttonSection";

type Props = StackScreenProps<RootStackParamList, "Balance">
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
    justify-content: center; 
    padding: 25px;
    flex: 1
`;

const BalanceContainer = styled(Container)`
    background-color: ${colors.graylight}; 
    width: ${100}%; 
    padding: 25px;
    justify-content: center; 
    align-items: center
    flex: 1
`;

const Balance: FunctionComponent<Props> = ({route}) => {
return(
    <>
        <StatusBar style="dark"/>
        <BalanceContainer>
        <AmountSection balance={route?.params?.balance}/>
        <BalanceCardSection {...route?.params}/>
        <ButtonSection balance={0}/>
        </BalanceContainer>
    </>
);
};
export default Balance;
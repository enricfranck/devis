import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Text } from "react-native";

import background from "./../../assets/bgs/background_v1.png"
import { StackScreenProps } from "@react-navigation/stack";
import { Container } from "postcss";
import { RootStackParamList } from "../../navigators/RootStack";
import AmountSection from "../balance/amountSection";
import BalanceCardSection from "../balance/balanceCardSection";
import ButtonSection from "../balance/buttonSection";
import { colors } from "../colors";
import BigText from "../texts/BigText";

type Props = StackScreenProps<RootStackParamList, "ProjectCreate">
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

const BalanceContainer = styled.View`
    background-color: ${colors.graylight}; 
    width: ${100}%; 
    padding: 25px;
    justify-content: center; 
    align-items: center
    flex: 1
`;

const ProjectCreate: FunctionComponent<Props> = ({route}) => {
return(
    <>
       <BalanceContainer>
        <BigText>
            Test
        </BigText>
       </BalanceContainer>
    </>
);
};
export default ProjectCreate;
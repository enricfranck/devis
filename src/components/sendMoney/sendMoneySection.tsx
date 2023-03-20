import React, {FunctionComponent, useRef} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ImageSourcePropType, GestureResponderEvent, StyleProp, ViewStyle, ImageStyle } from "react-native/types";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import {Ionicons} from '@expo/vector-icons';
import { SendMoneySectionProps } from "./types";
import BottomSheet from 'reanimated-bottom-sheet'
import SendMoneyItem from "./SendMoneyItem";
import Animated from "react-native-reanimated";
const SendMoneySectionBackground = styled.View`
    width: ${100}%;
    padding-top: 15px;
    background-color: ${colors.white}
`
const SendMoneyRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${100}%;
    padding-horizontal: 25px;
`
const SendMoneyList = styled.FlatList`
    width: ${100}%;
    flex: auto;
    min-height: ${80}%;
    padding-horizontal: 25px;
`
const TextButton = styled.TouchableOpacity`

`

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {
    const sheetRef = useRef<BottomSheet>(null);

    const renderContent = () => {
        return (
        <SendMoneySectionBackground>
            <SendMoneyRow style={{marginBottom: 25}}>
                <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>
                    Send money to
                </RegularText>
                <TextButton onPress={()=> {alert("Àdd")}}>
                    <SmallText textStyles={{fontWeight: "bold", color: colors.tertiary}}
                    >+Add
                    </SmallText>
                </TextButton>
            </SendMoneyRow>
            <SendMoneyList 
                data={props.data}
                contentContainerStyle={{
                    alignItems: "flex-start",

                }}
                horizontal={true}
                showsHorizontalScrollIndicator= {false}
                keyExtractor={({id}:any) => id.toString()}
                renderItem={({item}: any) => <SendMoneyItem {... item}/>} 
            />

        </SendMoneySectionBackground>
        )
    }

return(
   <BottomSheet 
        ref={sheetRef}
        snapPoints={[240, 50]}
        borderRadius={28}
        initialSnap={1}
        enabledContentTapInteraction={true}
        renderContent={renderContent}
   />
   )
};
export default SendMoneySection;
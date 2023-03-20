import React, {FunctionComponent, useState} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ImageSourcePropType, GestureResponderEvent, StyleProp, ViewStyle, ImageStyle } from "react-native/types";
import { TransactionSectionProps } from "./types";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import {Ionicons} from '@expo/vector-icons';
import TransactionItem from "./ProjectItem";
import Dialog from 'react-native-dialog'
import DialogCreateProject from "../Dialod/CreateDialog";

const TransactionBackground = styled.View`
    flex: 2;
    width: ${100}%;
    padding-horizontal: 25px;
    padding-top: 5px;
    margin-bottom: 50px
`;

const TextButton = styled.TouchableOpacity`
`

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${100}%;
`
const TransactionList = styled.FlatList`
    width: ${100}%;

`

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
const [visible, setVisible]= useState(false)

const showDilog = () => {
    setVisible(true)
}
const handleCancel = () =>{
    setVisible(false)
}
return(
   <TransactionBackground>
        <TransactionRow style={{marginBottom: 25}}>
            <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>Liste des Projet</RegularText>
            <TextButton onPress={showDilog}>
                <RegularText textStyles={{fontWeight: "bold", color: colors.tertiary}}
                >+Ajouter
                </RegularText>
            </TextButton>
        </TransactionRow>
        <TransactionList 
            data={props.data}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
                {
                    paddingRight: 25,
                    alignItems: "center",
                }
            }
            keyExtractor={({id}:any) => id.toString()}
            renderItem={({item}: any) => <TransactionItem {... item}/>}
            />
           <DialogCreateProject visible={visible} cancel={()=>{ setVisible(false)}}/>
   </TransactionBackground>
   
   )
};
export default TransactionSection;
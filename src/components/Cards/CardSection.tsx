import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ImageSourcePropType, GestureResponderEvent, StyleProp, ViewStyle, ImageStyle } from "react-native/types";
import { CardSectionProps } from "./types";
import CardItem from "./CardItem";
import { colors } from "../colors";

const CardList = styled.FlatList`
    flex: 1;
    width: ${100}%;
    padding-left: 25px;
    padding-bottom: 15px;
`;

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
return(
   <CardList 
        data={props.data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
            {
                paddingRight: 25,
                alignItems: "center",
            }
        }
        keyExtractor={({id}:any) => id.toString()}
        renderItem={({item}: any) => <CardItem {... item}/>}
   />
   )
};
export default CardSection;
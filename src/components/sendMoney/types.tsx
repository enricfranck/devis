import { ImageSourcePropType } from "react-native";

export interface SendMoneyProps{
    id: number;
    amount: string;
    name: string;
    background: string;
    img: ImageSourcePropType
}

export interface SendMoneySectionProps{
    data: Array<SendMoneyProps>
}
import { ImageSourcePropType } from "react-native";

export interface TransactionProps{
    id: number;
    title: string;
    subtitle: string;
    amount?: string;
    date?: string;
    art:{
        icon: string;
        backgournd: string;
    }
}

export interface TransactionSectionProps{
    data: Array<TransactionProps>
}

export interface TransactionAviProps{
    icon: any;
    background: string;
}
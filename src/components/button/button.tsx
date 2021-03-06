import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator,Text } from "react-native";
import styles from "./button.styles";
// import Text from "../text/text";

type ButtonProps = {
    title: string;
    loading?: boolean;
} & TouchableOpacityProps;

export default function ButtonComponent({ title, style, loading, ...props }: ButtonProps): ReactElement {
    // console.log(loading)
    return (
        
        <TouchableOpacity style={style} disabled={loading} {...props}>
            {loading ? (
                <ActivityIndicator color="white"></ActivityIndicator>
            ) : (
                <Text style={styles.buttonText}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}
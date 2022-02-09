import React, { Component, ReactElement } from 'react';
import {
  Text,
  TouchableOpacityProps,
  TouchableWithoutFeedback
} from 'react-native';
import * as Animatable from 'react-native-animatable';

type ButtonProps = {
    title: string;
    loading?: boolean;
    status?: boolean;
} & TouchableOpacityProps;


export default function Animbutton({ title, style, loading,status, ...props }: ButtonProps): ReactElement {
   
    return (
      <TouchableWithoutFeedback onPress={() => this._onPress()}>
        <Animatable.View ref="view" style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: status ? this.props.onColor : "#bdbdbd", borderRadius:20}}>
          <Text style={{color: status ? "white" : "#696969", fontWeight: "bold"}}>{this.props.text}</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  
}
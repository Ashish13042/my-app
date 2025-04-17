import { View, Text,  TouchableOpacity } from 'react-native';
import React from 'react';

const MyButton = ({title, onPress}) => {
    return (
        <View style={{alignItems:'center',justifyContent:'center',marginTop:20,marginBottom:20}}>
            <TouchableOpacity style={{backgroundColor:'blue', padding:20, borderRadius:10}} onPress={onPress}>
                <Text style={{color:'white',fontSize:20, paddingHorizontal:20}}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyButton;
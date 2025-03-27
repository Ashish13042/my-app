import { View, Text,  TouchableOpacity } from 'react-native';
import React from 'react';

const MyButton = ({title, onPress}) => {
    return (
        <View>
            <TouchableOpacity style={{backgroundColor:'green', padding:20, borderRadius:10}} onPress={onPress}>
                <Text style={{color:'white',fontSize:20}}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyButton;
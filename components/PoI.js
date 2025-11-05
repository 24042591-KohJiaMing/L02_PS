import {Text, View, Image} from 'react-native';
import React from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {styles} from './Styles';


const PoI = ({poi_name, description, icon_name, image, country}) => {
    return (
        <View>
            <Image source={image} style={{width: 500, height: 400}} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name={icon_name} size={24} color="black" style={{marginTop: 6}} />
                <Text style={styles.poiName}>{poi_name}</Text>
            </View>
            <Text>{description}</Text>
        </View>
    )
}

export default PoI;
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import React from "react";
import PoI from "./components/PoI";
import {styles} from './components/Styles'

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="dark" />
                <Text style={styles.header}>Place of Interest</Text>
                <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
                    <PoI
                        poi_name="Hakone Shrine, (Hakone, Japan)"
                        icon_name="place"
                        description="A serene Shinto shrine nestled in a forest by Lake Ashi, famous for its red torii gate standing in the water. It’s a peaceful spot offering beautiful views and a touch of spiritual tranquility."
                        image={require('./img/Japan.jpg')}
                    />
                    <PoI
                        poi_name="Eiffel Tower (Paris, France)"
                        icon_name="place"
                        description="One of the world’s most recognizable landmarks, the Eiffel Tower offers panoramic views of Paris and serves as a symbol of French art, culture, and engineering."
                        image={require('./img/Paris.jpg')}
                    />
                    <PoI
                        poi_name="Great Wall of China (China)"
                        icon_name="place"
                        description="Stretching over 13,000 miles, this ancient fortification was built to protect Chinese states from invasions and remains a remarkable feat of human construction."
                        image={require('./img/China.jpg')}
                    />
                    <PoI
                        poi_name="Machu Picchu (Peru)"
                        icon_name="place"
                        description="A 15th-century Incan citadel nestled high in the Andes Mountains, Machu Picchu is famous for its stunning architecture, mysterious history, and breathtaking scenery."
                        image={require('./img/MachuPicchu.jpg')}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default App;

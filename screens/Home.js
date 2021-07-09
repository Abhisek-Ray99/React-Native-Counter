import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

import PalettePreview from '../components/PalettePreview';

// const COLORSPALETTE = [
//     { colorName: 'Base03', hexCode: '#002b36' },
//     { colorName: 'Base02', hexCode: '#073642' },
//     { colorName: 'Base01', hexCode: '#586e75' },
//     { colorName: 'Base00', hexCode: '#657b83' },
//     { colorName: 'Base0', hexCode: '#839496' },
//     { colorName: 'Base1', hexCode: '#93a1a1' },
//     { colorName: 'Base2', hexCode: '#eee8d5' },
//     { colorName: 'Base3', hexCode: '#fdf6e3' },
//     { colorName: 'Yellow', hexCode: '#b58900' },
//     { colorName: 'Orange', hexCode: '#cb4b16' },
//     { colorName: 'Red', hexCode: '#dc322f' },
//     { colorName: 'Magenta', hexCode: '#d33682' },
//     { colorName: 'Violet', hexCode: '#6c71c4' },
//     { colorName: 'Blue', hexCode: '#268bd2' },
//     { colorName: 'Cyan', hexCode: '#2aa198' },
//     { colorName: 'Green', hexCode: '#859900' },
// ];

// const RAINBOW = [
//     { colorName: 'Red', hexCode: '#FF0000' },
//     { colorName: 'Orange', hexCode: '#FF7F00' },
//     { colorName: 'Yellow', hexCode: '#FFFF00' },
//     { colorName: 'Green', hexCode: '#00FF00' },
//     { colorName: 'Violet', hexCode: '#8B00FF' },
// ];

// const FRONTEND_MASTERS = [
//     { colorName: 'Red', hexCode: '#c02d28' },
//     { colorName: 'Black', hexCode: '#3e3e3e' },
//     { colorName: 'Grey', hexCode: '#8a8a8a' },
//     { colorName: 'White', hexCode: '#ffffff' },
//     { colorName: 'Orange', hexCode: '#e66225' },
// ];

// const COLOR_PALETTES = [
//     { paletteName: 'Colors', colors: COLORSPALETTE },
//     { paletteName: 'Rainbow', colors: RAINBOW },
//     { paletteName: 'Frontend', colors: FRONTEND_MASTERS },
// ]

const Home = ({ navigation }) => {

    const [palettes, setPalettes] = useState([]);
    const [isrefreshing, setIsrefreshing] = useState(false);

    const handleFetchPalettes = useCallback(async () => {
        const response = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
        if (response.ok) {
            const palettes = await response.json();
            setPalettes(palettes);
        }
    }, []);

    useEffect(() => {
        handleFetchPalettes();
    }, []);

    const handleRefresh = useCallback(async () => {
        setIsrefreshing(true);
        await handleFetchPalettes();
        setIsrefreshing(false);
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View
                    style={{
                        marginRight: 10
                    }}
                >
                    <TouchableOpacity
                        style={styles.touchbutton}
                        onPress={() => navigation.navigate('Counter')}
                    >
                        <Text style={styles.cTitle}>Counter Screen</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation])


    return (
        <FlatList
            contentContainerStyle={{
                justifyContent: 'center'
            }}
            style={styles.list}
            data={palettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    handlePress={() => {
                        navigation.navigate('ColorPalette', item)
                    }}
                    palette={item}
                />

            )}
            refreshing={isrefreshing}
            onRefresh={handleRefresh}
            ListHeaderComponent={
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddNewPalette')}
                >
                    <Text>Open new ColorPalette Modal</Text>
                </TouchableOpacity>
            }
        />
    )
}

export default Home

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: '#fff',
    },
    touchbutton: {
        backgroundColor: '#F5E9DB',
        padding: 10,
        borderRadius: 14,
    },
    cTitle: {
        textAlign: 'center',
        color: '#FFA764',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

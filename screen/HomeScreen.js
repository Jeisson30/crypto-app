import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchData } from "../services/apiService";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [cryptocurrencies, setCryptocurrencies] = useState([]);

    useEffect(() => {
        const fetchDataAPI = async () => {
            try {
                const data = await fetchData();
                setCryptocurrencies(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                Alert.alert('Por favor intente mas tarde')
            }
        };
        fetchDataAPI();
    }, []);

    const handleCryptoPress = (crypto) => {
        navigation.navigate('Details', { crypto });
    };

    const renderCryptos = () => {
        const cryptoPairs = [];
    
        for (const [index, crypto] of cryptocurrencies.entries()) {
            if (index % 2 === 0) {
                const nextCrypto = cryptocurrencies[index + 1];
                const cryptoPair = (
                    <View key={index} style={styles.cryptoPair}>
                        {renderCrypto(crypto)}
                        {nextCrypto && renderCrypto(nextCrypto)}
                    </View>
                );
                cryptoPairs.push(cryptoPair);
            }
        }
    
        return cryptoPairs;
    };
    

    const renderCrypto = (crypto) => {
        return (
            <TouchableWithoutFeedback
                key={crypto.id}
                onPress={() => handleCryptoPress(crypto)}
            >
                <View style={styles.cryptoContainer}>
                    <Image
                        style={styles.logo}
                        source={{ uri: crypto.image }} 
                    />
                    <View style={styles.info}>
                        <Text style={styles.symbol}>{crypto.symbol}</Text>
                        <Text style={styles.price}>${crypto.high_24h}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>CriptoMarket</Text>
            {renderCryptos()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f5f5f5',
        padding: 5,
        paddingBottom: 5
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
    },
    cryptoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'silver',
        padding: 10,
        borderRadius: 12,
        width: '49%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    symbol: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'blue',
    },
    price: {
        fontSize: 16,
        color: 'black',
    },
    cryptoPair: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});

export default HomeScreen;

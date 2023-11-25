import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

const DetailsCripto = ({ route }) => {
    const { crypto } = route.params;

    const [cryptoAmount, setCryptoAmount] = useState('');
    const [convertedValue, setConvertedValue] = useState(0);
    const localCurrencyRate = 1;

    const convertCryptoToLocalCurrency = (amount) => {
        const converted = amount * crypto.current_price * localCurrencyRate;
        setConvertedValue(converted);
    };

    const handleCryptoAmountChange = (text) => {
        if (text === '' || /^\d*\.?\d*$/.test(text)) {
            setCryptoAmount(text);
            const amount = parseFloat(text);
            if (!isNaN(amount)) {
                convertCryptoToLocalCurrency(amount);
            } else {
                setConvertedValue(0);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{crypto.name}</Text>
            <Image style={styles.image} source={{ uri: crypto.image }} />

            <View style={styles.detailsContainer}>
                <View style={styles.detail}>
                    <Text style={styles.label}>Precio Actual:</Text>
                    <Text style={styles.value}>${crypto.current_price}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.label}>Capitalización Mercado:</Text>
                    <Text style={styles.value}>${crypto.market_cap}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.label}>Posición en el Mercado:</Text>
                    <Text style={styles.value}>#{crypto.market_cap_rank}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.label}>Precio mas alto 24h:</Text>
                    <Text style={styles.value}>${crypto.high_24h}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.label}>Precio mas bajo 24h:</Text>
                    <Text style={styles.value}>${crypto.low_24h}</Text>
                </View>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Ingresa cantidad de la criptomoneda"
                keyboardType="numeric"
                value={cryptoAmount}
                onChangeText={handleCryptoAmountChange}
            />
            <Text style={styles.result}>
                Valor en Moneda Local: {convertedValue.toFixed(2)} USD
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    detailsContainer: {
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderRadius: 10,
        width: "100%",
    },
    detail: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
    },
    value: {
        fontSize: 16,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#FF7F50",
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        fontSize: 16,
    },
});

export default DetailsCripto;

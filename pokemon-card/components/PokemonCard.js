import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";
import getTypeDetails from "../utils/getTypeDetails";

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
    const { borderColor, emoji } = getTypeDetails(type);
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.hp}>❤️ {hp}</Text>
            </View>

            <Image
                source={image}
                style={styles.image}
                resizeMode="contain"
                accessibilityLabel={`${name} pokemon`}
            />

            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>
            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
            </View>
            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>Weakness: {weaknesses.join(", ")}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    nameText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 18,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    typeContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4

    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12,
    },
    typeText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    movesContainer:{
        marginBottom:16,
    },
    movesText:{
        fontSize:22,
        fontWeight:"bold",
    },
    weaknessContainer:{
        marginBottom:8,
    },
    weaknessText:{
        fontSize:22,
        fontWeight:"bold",
    },
});

export default PokemonCard;

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-native-gesture-handler";

function Area15Screen({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios
            .get('https://api.npoint.io/c8fbf3c68c02d5c303f3/holoidgen1')
            .then(res => setData(res.data))
            .catch((e) => alert("Gagal!", e.message))
        };
    fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                source={{
                    uri: "https://schedule.hololive.tv/dist/images/logo.png"
                }}
                style={styles.headerImage}
                />
            </View>
            <View style={{flexDirection: "row", alignSelf: "center", paddingVertical: 7}}>
                <View style={styles.blankContainer} />
                <View style={styles.blankDarkContainer} />
                <View style={styles.blankContainer} />
            </View>
            <FlatList
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail AREA 15', { msg: item.id })}>
                        <View style={styles.itemListContainer}>
                            <Image source={{ uri: item.avatar }} style={styles.imageContainer} />
                            <View style={styles.itemListContent}>
                                <Text style={styles.itemListText}>{item.name}</Text>
                            </View>
                        </View>
                        
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "#303030",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 15,
        alignItems: "center",
        paddingBottom: 10
    },
    headerImage: {
        height: 120,
        width: 240,
        resizeMode: 'contain'
    },
    flatlist: {
        flex: 1,
        marginHorizontal: 10
    },
    itemListContainer: {
        height: 100,
        backgroundColor: "#424242",
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15
    },
    itemListContent: {
        marginLeft: 25
    },
    itemListText: {
        color: "#ffffff",
        marginVertical: 2,
        fontWeight: "bold",
        fontSize: 24
    },
    imageContainer: {
        height: 90,
        width: 90,
        borderRadius: 60,
        marginVertical: 10
    },
    blankContainer: {
        paddingVertical: 10,
        backgroundColor: "#5FDDEF",
        borderRadius: 120,
        alignSelf: "center",
        width: "33%"
      },
      blankDarkContainer: {
        paddingVertical: 10,
        backgroundColor: "#27c7ff",
        borderRadius: 120,
        alignSelf: "center",
        width: "33%"
      }
});

export default Area15Screen;
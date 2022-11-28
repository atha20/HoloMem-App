import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";

function AboutScreen() {
  const [data, setData] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.github.com/users/atha20")
      . then(res => setData(res.data))
        .catch((e) => alert("Gagal!", e.message))
    };
    fetchData();
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: data.avatar_url
          }}
        style={styles.headerImage}
        />
        <Text style={styles.headerText}>
          {data.login}
        </Text>
        <Text style={styles.headerTextDesc}>{data.name}</Text>
      </View>
      <View style={{flexDirection: "row", alignSelf: "center", paddingVertical: 7}}>
        <View style={styles.blankContainer} />
        <View style={styles.blankDarkContainer} />
        <View style={styles.blankContainer} />
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.headerTextDesc}>
          HoloMem adalah aplikasi untuk menampilkan profile dari anggota Hololive
        </Text>
      </View>
      <View style={{flexDirection: "row", alignSelf: "center", paddingVertical: 7}}>
          <View style={styles.blankDarkContainer} />
          <View style={styles.blankContainer} />
          <View style={styles.blankDarkContainer} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  headerContainer: {
    backgroundColor: "#424242",
    borderRadius: 20,
    alignItems: "center",
    paddingBottom: 10
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 10
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
  headerTextDesc: {
    color: "#fff",
    fontSize: 20,
  },
  profileContainer: {
    backgroundColor: "#424242",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
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

export default AboutScreen;
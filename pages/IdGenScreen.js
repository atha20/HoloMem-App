import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

function IdGenScreen({ navigation }) {
  const DATA = [
    {
      id: "1",
      title: "Hololive Indonesia 1st Generation",
      nav: "AREA 15"
    },
    {
      id: "2",
      title: "Hololive Indonesia 2nd Generation",
      nav: "holoro"
    },
    {
      id: "3",
      title: "Hololive Indonesia 3rd Generation",
      nav: "holoh3ro"
    },
  ];

  const ListItemNama = (dataPassing) => {
    return (
      <View style={styles.itemListContainer}>
        <View style={styles.itemListContent}>
          <Text style={styles.itemListText} onPress={() => navigation.navigate(dataPassing.dataNama.nav, {msg: null})}>
            {dataPassing.dataNama.title}
          </Text>
        </View>
      </View>
    );
  };

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
      <FlatList
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={( {item} ) => (
          <TouchableOpacity>
              <View style={styles.itemListContainer}>
                <Image 
                  source={{ uri: "https://yt3.ggpht.com/a/AGF-l78roMKQjt4568VGVjmLkiOJ-25H9BxD_GH6QA=s88-c-k-c0xffffffff-no-rj-mo" }} 
                  style={styles.imageContainer}
                />
                <View style={styles.itemListContent}>
                  <ListItemNama dataNama={item}  />
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
  itemListText: {
    color: "#ffffff",
    marginVertical: 2,
    fontWeight: "bold",
    fontSize: 24
  },
  itemListContent: {
    marginLeft: 0,
    width: 200
  },
  imageContainer: {
    height: 90,
    width: 90,
    borderRadius: 60,
    marginVertical: 10
  }
});

export default IdGenScreen;
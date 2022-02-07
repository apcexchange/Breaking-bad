import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

interface CharacterCardProps {
  name: string;
  nickname: string;
  birthday: string;
  occupation: [];
  img: string;
  appearance: [];
  status: string;
  charId:number
}

const { width, height } = Dimensions.get("window");

const CharacterCard = ({
  name,
  nickname,
  birthday,
  occupation,
  img,
  appearance,
  status,
  charId,
  
}: CharacterCardProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: img,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Name : {name}</Text>
            <Text style={styles.nickName}>NickName : {nickname}</Text>
            <Text style={styles.dob}>Date of Birth : {birthday} </Text>
            <Text style={styles.status}>Status : {status} </Text>
            <Text style={styles.status}>CharId : {charId} </Text>
            <Text style={styles.occupations}>occupations</Text>
            <Text style={styles.occupationItems}> {occupation.map((item,i) => {
         return(<Text key ={i}> {item}</Text>)
      })}</Text>
           
            <Text style={styles.appearance}> Appearances </Text>
            <ScrollView horizontal>
               
              <Text style={styles.appearanceItems}> {appearance.map((item,i) => {
         return(<Text key ={i}> {item}</Text>)
      })}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginVertical: 10,
  },

  textContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
  },
  imageContainer: {},
  image: {
    height: height * 0.5,
    marginVertical: width * 0.0,
    width: "100%",
    resizeMode: "stretch",
    overflow: "hidden",
    borderRadius: width * 0.02,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  nickName: {
    fontSize: 16,
  },
  dob: {
    fontSize: 16,
  },

  status: {
    fontSize: 16,
  },
  occupations: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: "500",
  },
  occupationItems: {
    fontSize: 16,
  },

  appearance: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
  },
  appearanceItems: {
    fontSize: 16,
  },
  
});

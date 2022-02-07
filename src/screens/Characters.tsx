import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import CharacterCard from "../component/CharacterCard";
import Indicator from "../component/Indicator";
import AxiosInstance from "../network/AxiosInstance";

interface CharacterScreenProps {
  name: string;
  nickname: string;
  birthday: string;
  occupation: [];
  img: string;
  appearance: [];
  status: string;
  charId:number;
}

const CharacterScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(12);
  const [characters, setCharacters] = useState([]);

  


  useEffect(() => fetchCharacters(), [limit]);

  const loadMore = () => {
      console.log("lenght   ",characters.length)
      if(characters.length < 48){
    setLimit(limit + 12)
}

if (characters.length == 48){
    setLimit(characters.length + 2)
}
      
  };

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="small" color="red" />
      </View>
    );
  };

  const fetchCharacters = () => {
    AxiosInstance.get(`/characters?limit=${limit}`)
      .then((response) => {
        const result = response.data;
        setCharacters(result);
        setIsLoading(false);
        console.log(result[0]);
        console.log("result lenght",result.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!characters) {
    return null;
  }

  const checkLimit = () => {
    if (characters.length <= 50){
        fetchCharacters()
    }
}

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" color="red" />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item, index) => "key" + index}
          renderItem={(item: { [key: string]: any }) => {
            return (
                
              <CharacterCard
                name={item.item.name}

                nickname={item.item.nickname}
                status={item.item.status}
                charId={item.item.char_id}
                birthday={item.item.birthday}
                img={item.item.img}
                occupation={item.item.occupation[0]}
                appearance={item.item.appearance[0]}
              />

            );
          }}
          ListFooterComponent={characters.length < 50 ? Indicator : <Text style={{textAlign: 'center'}}> The End</Text>}
          onEndReached={loadMore}
          onEndReachedThreshold={0}
        />
      )}
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

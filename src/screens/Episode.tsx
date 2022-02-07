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
import EpisodeCard from "../component/EpisodeCard";
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
}

const CharacterScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(12);
  const [characters, setCharacters] = useState([]);

//   var nextPage = 12;
//   while (nextPage <= 50) {
//     nextPage + 12;
//   }

  useEffect(() => fetchCharacters(), [limit]);

  const loadMore = () => {
    setLimit(limit + 12);
  };

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="small" color="red" />
      </View>
    );
  };

  const fetchCharacters = () => {
    AxiosInstance.get(`/episodes`)
      .then((response) => {
        const result = response.data;
        setCharacters(result);
        setIsLoading(false);
        console.log(result[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!characters) {
    return null;
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
              <EpisodeCard 
              characters={item.item.characters}
              
             air_date={item.item.air_date} 
             episode={item.item.episode} 
              season={item.item.season}
               series={item.item.series} 
               title={item.item.title} 
               episode_id={item.item.episode}
              
                />
            );
          }}
          ListFooterComponent={Indicator}
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

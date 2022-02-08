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


const CharacterScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [episode,setEpisodes] = useState([])

  useEffect(() => fetchEpisodes(), []);

  const fetchEpisodes = () => {
    AxiosInstance.get(`/episodes`)
      .then((response) => {
        const result = response.data;
        setEpisodes(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!episode) {
    return null;
  }


  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" color="red" />
      ) : (
        <FlatList
          data={episode}
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

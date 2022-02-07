import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface EpisodeCardProps {
    air_date: string,
    characters:[],
    episode:string,
    season:string,
    series:string,
    title:string,
    episode_id:string

}

const EpisodeCard = ({
    air_date,characters,episode,episode_id,title,season,series
}: EpisodeCardProps) => {
  return (
    <View style={styles.container}>
      <Text>title: {title}</Text>
      <Text>Air Date: {air_date}</Text>
      <Text>Characters: {characters}</Text>
      <Text>episode: {episode}</Text>
      <Text>episode_id: {episode_id}</Text>
      <Text>season: {season}</Text>
      <Text>series: {series}</Text>
    </View>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
      marginVertical:15
  }
});




import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const randomRgb = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button title="Add a Color" onPress={() => setColors([...colors, randomRgb()])} />
      <FlatList 
        data={colors}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ColorScreen;
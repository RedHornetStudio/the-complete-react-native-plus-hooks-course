import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend #1', age: 27 },
    { name: 'friend #2', age: 33 },
    { name: 'friend #3', age: 40 },
    { name: 'friend #4', age: 43 },
    { name: 'friend #5', age: 23 },
    { name: 'friend #6', age: 30 },
    { name: 'friend #7', age: 25 },
    { name: 'friend #8', age: 35 },
    { name: 'friend #9', age: 47 },
  ];

  return (
    <FlatList 
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({ item }) => {
        return <Text style={style.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const Pagination = ({movies, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {movies?.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 20, 6],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#d1d5db', '#FBFAF2', '#d1d5db'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[
              styles.dot,
              {width: dotWidth, backgroundColor},
              
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    
  },
  dot: {
    width: 3,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 2,
    backgroundColor: '#d1d5db',
  },
 
});
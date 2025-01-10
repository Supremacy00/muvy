import { View, Text } from 'react-native'
import React from 'react'
import AllUpcomingMovies from '../../components/home/upcomingMovies/AllUpcomingMovies'

const AllUpcomingMoviesScreen = () => {
  return (
    <View className="flex-1 bg-primary-color">
     <AllUpcomingMovies />
    </View>
  )
}

export default AllUpcomingMoviesScreen
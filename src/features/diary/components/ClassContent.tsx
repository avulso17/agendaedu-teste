import * as React from 'react'
import { View, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import { ClassTabBar } from './ClassTabBar'
import ClassObservationsList from './observations/ClassObservationsList'

const FirstRoute = () => (
  <View style={{ backgroundColor: '#ff4081', flex: 1 }} />
)
const SecondRoute = () => (
  <View style={{ backgroundColor: '#673ab7', flex: 1 }} />
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: SecondRoute,
  four: SecondRoute,
  observations: ClassObservationsList,
})

const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
  { key: 'observations', title: 'Observações' },
]

export default function TabViewExample() {
  const layout = useWindowDimensions()
  const [index, setIndex] = React.useState(0)

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => <ClassTabBar {...props} />}
    />
  )
}

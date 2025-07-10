import * as React from 'react'
import { useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import ClassMockTabView from './ClassMockTabView'
import { ClassTabBar } from './ClassTabBar'
import ClassObservationsList from './observations/ClassObservationsList'

const MockRoute = () => <ClassMockTabView />

const renderScene = SceneMap({
  first: MockRoute,
  second: MockRoute,
  third: MockRoute,
  four: MockRoute,
  observations: ClassObservationsList,
})

const routes = [
  { key: 'observations', title: 'Observações' },
  { key: 'first', title: 'Section' },
  { key: 'second', title: 'Section' },
]

export default function ClassTabView() {
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

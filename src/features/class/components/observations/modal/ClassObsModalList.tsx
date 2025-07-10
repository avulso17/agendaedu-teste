import { FlatList, View } from 'react-native'
import ClassObsModalListItem from './ClassObsModalListItem'

export default function ClassObservationsModalList() {
  return (
    <View className='flex-1'>
      <FlatList
        className='pt-5 px-4'
        data={[
          {
            id: '1',
            observation: 'Comunicativo',
            favorite: true,
          },
          {
            id: '2',
            observation: 'Leitura Excelente',
            favorite: true,
          },
          {
            id: '3',
            observation: 'Precisa melhorar letra cursiva',
            favorite: false,
          },
          {
            id: '4',
            observation:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloribus quidem temporibus minima.',
            favorite: false,
          },
          {
            id: '5',
            observation:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloribus quidem temporibus minima.',
            favorite: true,
          },
          {
            id: '6',
            observation:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloribus quidem temporibus minima.',
            favorite: false,
          },
        ]}
        renderItem={({ item }) => (
          <ClassObsModalListItem
            id={item.id}
            observation={item.observation}
            favorite={item.favorite}
          />
        )}
      />
    </View>
  )
}

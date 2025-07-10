import { FlatList } from 'react-native'
import ClassObservationsCard from './ClassObservationsCard'

const mock = [
  {
    name: 'Felipe Mateus',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
  {
    name: 'Amanda Goncalves Cruzeiro',
    imgUrl: 'https://i.pravatar.cc/300',
    obs: [],
  },
]

export default function ClassObservationsList() {
  return (
    <FlatList
      data={mock}
      renderItem={({ item }) => (
        <ClassObservationsCard name={item.name} imgSrc={{ uri: item.imgUrl }} />
      )}
      className='gap-4 pt-5 px-4'
    />
  )
}

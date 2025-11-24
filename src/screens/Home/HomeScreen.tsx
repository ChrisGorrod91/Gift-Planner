// src/screens/Home/HomeScreen.tsx
import { YStack, Button, H1, Paragraph } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props) => {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space="$4">
      <H1>Gift Planner</H1>
      <Paragraph size="$5" ta="center">
        Track and share gift ideas across your family and friends.
      </Paragraph>

      <Button
        size="$5"
        theme="blue"
        onPress={() => navigation.navigate('PeopleList')}
      >
        View People
      </Button>

      <Button
        size="$5"
        theme="green"
        onPress={() => navigation.navigate('Settings')}
      >
        Settings
      </Button>
    </YStack>
  )
}

export default HomeScreen

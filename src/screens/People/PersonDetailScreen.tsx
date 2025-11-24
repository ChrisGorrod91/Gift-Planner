import React from 'react'
import { YStack, XStack, Avatar, H1, Text, Button, Card } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Gift } from '@tamagui/lucide-icons'
import { usePersons } from '../../context/PersonContext'
import { getInitials } from '../../utils/nameUtils'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'PersonDetail'>

const PersonDetailScreen = ({ route, navigation }: Props) => {
  const { personId } = route.params
  const { getPersonById } = usePersons()
  const person = getPersonById(personId)

  if (!person) {
    return (
      <YStack f={1} jc="center" ai="center" p="$4">
        <Text>Person not found</Text>
        <Button mt="$4" onPress={() => navigation.goBack()}>
          Go Back
        </Button>
      </YStack>
    )
  }

  return (
    <YStack f={1} p="$4" space="$4" bc="$background">
      <Card elevate p="$4" bc="$background">
        <YStack space="$4" ai="center">
          <Avatar circular size="$12">
            {person.imageUri ? (
              <Avatar.Image src={person.imageUri} />
            ) : (
              <Avatar.Fallback bc="$blue5">
                <Text fontSize="$10" fontWeight="600" color="$blue10">
                  {getInitials(person.name)}
                </Text>
              </Avatar.Fallback>
            )}
          </Avatar>

          <YStack space="$2" ai="center">
            <H1>{person.name}</H1>
            {person.relationship && (
              <Text fontSize="$5" color="$gray10">
                {person.relationship}
              </Text>
            )}
          </YStack>
        </YStack>
      </Card>

      <Card p="$6" ai="center" jc="center" bc="$gray2">
        <Gift size="$4" color="$gray10" mb="$2" />
        <Text color="$gray10" ta="center" fontSize="$4">
          Gift ideas will appear here.{'\n'}
          Coming in the next phase!
        </Text>
      </Card>
    </YStack>
  )
}

export default PersonDetailScreen

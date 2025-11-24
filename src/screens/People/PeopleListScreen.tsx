import React, { useState } from 'react'
import { YStack, H2, Button, ScrollView, Card, XStack, Avatar, Text, Separator } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Plus } from '@tamagui/lucide-icons'
import { AddPersonForm } from '../../components/forms/AddPersonForm'
import { usePersons } from '../../context/PersonContext'
import { getInitials } from '../../utils/nameUtils'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'PeopleList'>

const PeopleListScreen = ({ navigation }: Props) => {
  const { persons, addPerson } = usePersons()
  const [showForm, setShowForm] = useState(false)

  const handleAddPerson = (name: string, imageUri?: string) => {
    addPerson({ name, imageUri })
    setShowForm(false)
  }

  return (
    <YStack f={1} p="$4" space="$4" bc="$background">
      <XStack jc="space-between" ai="center">
        <H2>People</H2>
        <Button
          size="$4"
          theme="blue"
          icon={Plus}
          onPress={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add Person'}
        </Button>
      </XStack>

      {showForm && (
        <AddPersonForm
          onSubmit={handleAddPerson}
          onCancel={() => setShowForm(false)}
        />
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack space="$3">
          {persons.length === 0 && !showForm && (
            <Card p="$6" ai="center" jc="center" bc="$gray2">
              <Text color="$gray10" ta="center">
                No people added yet.{'\n'}
                Click "Add Person" to get started!
              </Text>
            </Card>
          )}

          {persons.map((person) => (
            <Card
              key={person.id}
              elevate
              p="$4"
              mb="$4"
              pressStyle={{ scale: 0.98 }}
              animation="quick"
              onPress={() => navigation.navigate('PersonDetail', { personId: person.id })}
            >
              <XStack space="$4" ai="center">
                <Avatar circular size="$6">
                  {person.imageUri ? (
                    <Avatar.Image src={person.imageUri} />
                  ) : (
                    <Avatar.Fallback bc="$blue5">
                      <Text fontSize="$6" fontWeight="600" color="$blue10">
                        {getInitials(person.name)}
                      </Text>
                    </Avatar.Fallback>
                  )}
                </Avatar>

                <YStack f={1}>
                  <Text fontSize="$6" fontWeight="600">
                    {person.name}
                  </Text>
                  {person.relationship && (
                    <Text fontSize="$3" color="$gray10">
                      {person.relationship}
                    </Text>
                  )}
                </YStack>
              </XStack>
            </Card>
          ))}
        </YStack>
      </ScrollView>
    </YStack>
  )
}

export default PeopleListScreen

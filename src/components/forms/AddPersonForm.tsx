import React, { useState } from 'react'
import { YStack, XStack, Input, Button, Label, Avatar, Text } from 'tamagui'
import { User } from '@tamagui/lucide-icons'
import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'

interface AddPersonFormProps {
  onSubmit: (name: string, imageUri?: string) => void
  onCancel?: () => void
}

export const AddPersonForm = ({ onSubmit, onCancel }: AddPersonFormProps) => {
  const [name, setName] = useState('')
  const [imageUri, setImageUri] = useState<string | undefined>()

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      Alert.alert('Permission Required', 'Permission to access photos is required!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    })

    if (!result.canceled && result.assets[0]) {
      setImageUri(result.assets[0].uri)
    }
  }

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name.trim(), imageUri)
      setName('')
      setImageUri(undefined)
    }
  }

  return (
    <YStack space="$4" p="$4" bc="$background" br="$4" elevation="$2">
      <YStack space="$2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter person's name"
          value={name}
          onChangeText={setName}
          size="$4"
        />
      </YStack>

      <YStack space="$2" ai="center">
        <Label>Photo (Optional)</Label>
        <Avatar circular size="$10" onPress={pickImage}>
          {imageUri ? (
            <Avatar.Image src={imageUri} />
          ) : (
            <Avatar.Fallback bc="$gray5">
              <User size="$4" />
            </Avatar.Fallback>
          )}
        </Avatar>
        <Button size="$3" chromeless onPress={pickImage}>
          {imageUri ? 'Change Photo' : 'Add Photo'}
        </Button>
      </YStack>

      <XStack space="$3" jc="flex-end">
        {onCancel && (
          <Button
            size="$4"
            chromeless
            onPress={onCancel}
          >
            Cancel
          </Button>
        )}
        <Button
          size="$4"
          theme="blue"
          onPress={handleSubmit}
          disabled={!name.trim()}
        >
          Add Person
        </Button>
      </XStack>
    </YStack>
  )
}

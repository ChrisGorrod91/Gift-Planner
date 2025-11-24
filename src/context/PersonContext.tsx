import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Person, PersonId } from '../types/models'

interface PersonContextType {
  persons: Person[]
  addPerson: (person: Omit<Person, 'id'>) => void
  updatePerson: (id: PersonId, person: Partial<Person>) => void
  deletePerson: (id: PersonId) => void
  getPersonById: (id: PersonId) => Person | undefined
}

const PersonContext = createContext<PersonContextType | undefined>(undefined)

export const PersonProvider = ({ children }: { children: ReactNode }) => {
  const [persons, setPersons] = useState<Person[]>([])

  const addPerson = (person: Omit<Person, 'id'>) => {
    const newPerson: Person = {
      ...person,
      id: Date.now().toString(),
    }
    setPersons((prev) => [...prev, newPerson])
  }

  const updatePerson = (id: PersonId, updates: Partial<Person>) => {
    setPersons((prev) =>
      prev.map((person) =>
        person.id === id ? { ...person, ...updates } : person
      )
    )
  }

  const deletePerson = (id: PersonId) => {
    setPersons((prev) => prev.filter((person) => person.id !== id))
  }

  const getPersonById = (id: PersonId) => {
    return persons.find((person) => person.id === id)
  }

  return (
    <PersonContext.Provider
      value={{ persons, addPerson, updatePerson, deletePerson, getPersonById }}
    >
      {children}
    </PersonContext.Provider>
  )
}

export const usePersons = () => {
  const context = useContext(PersonContext)
  if (!context) {
    throw new Error('usePersons must be used within a PersonProvider')
  }
  return context
}

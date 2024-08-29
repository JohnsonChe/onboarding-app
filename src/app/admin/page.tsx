'use client'
import React, { useState } from 'react'
import ComponentConfig from '@/config/ComponentConfig.json'
import SubmitButton from '@/components/SubmitButton'
import { Component, PageComponents, PageConfig } from '@/app/types'

const componentsList: Component[] = [
  { id: 'birthday-form', type: 'BirthdayForm', name: 'Birthdate' },
  { id: 'about-me-form', type: 'AboutMe', name: 'About Me' },
  { id: 'address-form', type: 'AddressForm', name: 'Address' }
]

export default function AdminComponentManager() {
  const [pageComponents, setPageComponents] = useState<PageComponents>({
    page1: [...ComponentConfig.pages[0].components] as Component[],
    page2: [...ComponentConfig.pages[1].components] as Component[],
    page3: [...ComponentConfig.pages[2].components] as Component[]
  })

  const getComponentPage = (componentId: string) => {
    if (pageComponents.page1.some((component) => component.id === componentId)) return 'page1'
    if (pageComponents.page2.some((component) => component.id === componentId)) return 'page2'
    if (pageComponents.page3.some((component) => component.id === componentId)) return 'page3'
    return ''
  }

  const handleSelectChange = (component: Component, targetPage: keyof PageComponents) => {
    setPageComponents((prevPages: PageComponents) => {
      const updatedPages = Object.fromEntries(
        Object.entries(prevPages).map(([key, components]) => [
          key,
          components.filter((field) => field.id !== component.id)
        ])
      ) as PageComponents

      if (targetPage) {
        updatedPages[targetPage].push(component)
      }

      return updatedPages
    })
  }

  const validateAndSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { page2, page3 } = pageComponents
    if (page2.length === 0 || page3.length === 0) {
      alert('Each of the 2nd and 3rd pages must have at least one component.')
      return
    }
    updateConfig(generateNewJSON())
  }

  const generateNewJSON = () => {
    const newJsonConfig = { ...ComponentConfig } as PageConfig
    Object.entries(pageComponents).forEach((page, index) => {
      const [_, pageComponentArray] = page
      newJsonConfig.pages[index].components = pageComponentArray
    })
    return newJsonConfig
  }

  const updateConfig = async (jsonConfig: PageConfig) => {
    const response = await fetch('/api/onboarding-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonConfig)
    })
    if (response.ok) {
      alert('Updated Component Config!')
    } else {
      console.error('Failed to update component config')
    }
  }

  return (
    <div className='container p-4'>
      <form className='max-w-sm mx-auto' onSubmit={validateAndSubmit}>
        <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>
          Admin Component Manager
        </h1>
        {componentsList.map((component) => (
          <div className='mb-2' key={component.id}>
            <label
              className='block mb-2 text-sm font-medium text-gray-900'
              htmlFor={`select-${component.id}`}>
              {component.name} Field
            </label>
            <select
              id={`select-${component.id}`}
              value={getComponentPage(component.id)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              onChange={(e) =>
                handleSelectChange(component, e.target.value as keyof PageComponents)
              }>
              <option value=''>Select Page</option>
              <option value='page1'>Page 1</option>
              <option value='page2'>Page 2</option>
              <option value='page3'>Page 3</option>
            </select>
          </div>
        ))}
        <SubmitButton />
      </form>
    </div>
  )
}

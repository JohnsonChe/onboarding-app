'use client'
import ComponentRegistry from '@/libs/ComponentRegistry'
import ComponentConfig from '@/config/ComponentConfig.json'
import SubmitButton from '@/components/SubmitButton'
import { useState, useEffect } from 'react'
import { Component, PageComponent } from '@/app/types'

const renderComponent = (component: Component) => {
  const PageComponent = ComponentRegistry[component.type]
  return PageComponent ? <PageComponent key={component.id} {...component.props} /> : null
}

const MAX_PAGES: number = ComponentConfig.pages.length

export default function OnboardingPage() {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [onboardingId, setOnBoardingId] = useState<string | undefined>()
  const [pageComponents, setPageComponents] = useState<PageComponent[]>()
  const [currentPageComponents, setCurrentPageComponents] = useState<PageComponent>()

  useEffect(() => {
    async function getInitComponentConfigData() {
      try {
        const response = await fetch('/api/onboarding-form')
        const result = await response.json()
        const fetechedResults = result.components.pages || ComponentConfig.pages

        setPageComponents(fetechedResults)
        setCurrentPageComponents(fetechedResults[pageNumber - 1])
      } catch {
        setPageComponents(ComponentConfig.pages as PageComponent[])
        setCurrentPageComponents(ComponentConfig.pages[pageNumber - 1] as PageComponent)
      }
    }
    getInitComponentConfigData()
  }, [])

  const onSubmit = async (event: any) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          pageNumber: currentPageComponents?.pageNumber,
          id: onboardingId
        })
      })

      const result = await response.json()

      if (response.ok) {
        setOnBoardingId(result.id)
        setPageNumber((prev) => {
          const newPageNumber = prev < MAX_PAGES ? prev + 1 : 1
          setCurrentPageComponents(pageComponents?.[newPageNumber - 1])

          return newPageNumber
        })
        console.log('User added:', result)
      } else {
        console.error('Error adding user:', result.error)
      }
    } catch (error) {
      console.error('Failed to submit form:', error)
    }
  }

  return (
    <div className='container p-4'>
      <form className='max-w-sm mx-auto' onSubmit={onSubmit}>
        <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>
          {currentPageComponents?.title} of {MAX_PAGES}
        </h1>
        {currentPageComponents?.components.map(renderComponent)}
        <SubmitButton />
      </form>
    </div>
  )
}

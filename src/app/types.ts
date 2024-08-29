import { ComponentType } from "react"

export type Component = {
  id: string
  type: keyof ComponentRegistry
  props?: any
  name: string
}

export type PageComponent = {
  id: string
  pageNumber: number
  title: string
  components: Component[]
}

export type PageComponents = {
  page1: Component[]
  page2: Component[]
  page3: Component[]
}

export type PageConfig = {
  pages: PageComponent[]
}

export type ComponentRegistry = {
  [key: string] : ComponentType<any>
}
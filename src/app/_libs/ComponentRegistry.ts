import { ComponentType } from "react"
import CredentialsForm from '@/components/CredentialsForm'
import AboutMe from "@/components/AboutMeForm"
import AddressForm from "@/components/AddressForm"
import BirthdayForm from "@/components/BirthdayForm"

type ComponentRegistry = {
    [key: string] : ComponentType<any>
}

interface AboutMeProps {
    aboutMe: string;
}

const ComponentRegistry: ComponentRegistry = {
    CredentialsForm,
    AboutMe,
    AddressForm,
    BirthdayForm
}

export default ComponentRegistry
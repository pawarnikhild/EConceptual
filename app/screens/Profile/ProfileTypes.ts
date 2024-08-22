export type ProfileScreenViewProps = {
    profile: Profile
    profileErrors: ProfileErrors
    loading: boolean
    apiError: string | null
    editMode: boolean
    setProfile: SetProfileFunction
    setEditMode: (active: boolean) => void
    editProfile: () => void
    logout: () => void
    //   token
}


export type Profile = {
    id: number
    name: string;
    email: string;
    city: string;
    country: string;
    pincode: number
}

export type ProfileErrors = {
    nameError: string
    emailError: string
    cityError: string
    countryError: string
    pincodeError: string
}

export type Countries = {
    label: string,
    value: string
}[];

export type SetProfileFunction = (updater: (prev: Profile) => Profile) => void;

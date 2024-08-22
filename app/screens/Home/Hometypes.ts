export type productsType = {
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    premiumAccess: boolean
    onPress?: () => void
}[];

type SetPage = (updater: (prev: number) => number) => void;

export type HomeScreenViewProps = {
    initialLoading: boolean
    products: productsType,
    page: number
    flatListLoading: boolean
    refreshFlatList: boolean
    setPage: SetPage
}

export type productType = productsType[number];

interface NavButtonData {
    id: number,
    title: string,
    path: string,
}

interface FallBackProps {
    bg: string,
    color: string
}

interface Cat {
    id: string,
    url: string,
    breeds: Breed[],
    favourite: {
        favouriteId: number
    },
    categories: []
    rows: number,
    cols: number
}

interface Vote {
    id: number,
    image_id: string,
    sub_id: null,
    created_at: string,
    value: number,
    image: {
        id: string,
        url: string
    },
    rows: number,
    cols: number
}

interface VotingRequestParams {
    image_id: string,
    rate: number
}

interface FavouringRequestParams {
    image_id: string,
}

interface FavouringResponse {
    id: number
}

interface UnFavourRequestData {
    favouriteId: number,
}

interface Breed {
    id: string,
    name: string,
    alt_names: string,
    description: string,
    origin: string,
    life_span: string,
    temperament: string,
    image: {
        id: string,
        width: number,
        height: number,
        url: string
    },
    weight: {
        metric: string,
    }
    rows: number,
    cols: number
}

interface VotesState {
    votes: Vote[],
    imageStatus: null | string,
    imageError: null | string
}

interface FavouritesState {
    favourites: Vote[],
    favouritesStatus: null | string,
    favouritesError: null | string,
    favourStatus: null | string,
    favourError: null | string,

}

interface ImagesesState {
    randomCat: Cat | object,
    randomCatStatus: null | string,
    randomCatError: null | string,
    cats: Cat[],
    catsStatus: null | string,
    catsError: null | string,
    favouriteStatus: null | string,
    favouriteError: null | string,
    deleteStatus: null | string,
    deleteError: null | string

}

interface BreedsState {
    breeds: Breed[] | [],
    breedStatus: null | string,
    breedsError: null | string,
    allBreeds: Breed[],
    catsByBreed: Cat[] | [],
    catsByBreedStatus: null | string,
    catsByBreedError: null | string,
    breedInfo: Breed | null
}

interface VotingState {
    userLogs: []
}

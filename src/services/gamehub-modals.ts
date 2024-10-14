
export interface Game {
    id: number,
    slug: string,
    name: string,
    released: string,
    background_image: string,
    rating: number
}

export interface Genre {
    id: number,
    slug: string,
    name: string,
    games_count: string,
    image_background: string
}

export interface Response<Results> {
    count?: number,
    next?: string | undefined,
    previous?: string | undefined,
    results: Results[]
}


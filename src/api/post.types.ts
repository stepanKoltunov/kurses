export interface PostTypes {
    id: number,
    title: string,
    body: string,
    userId: number
}

export const postDefaultValue:PostTypes  = {
    id: 0,
    title: "",
    body: "",
    userId: 0
}
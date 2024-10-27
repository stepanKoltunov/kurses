import {PostTypes} from "../post.types";

export interface  IPostRow extends PostTypes{
    filterHandler: (title: string) => void
}

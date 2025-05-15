import type {IPost} from "../model/types/Post.ts";

export const sortPosts = (posts: IPost[], direction: 'asc' | 'desc' = 'asc') => {
    return [...posts].sort((a,b) => {
        const compare = a.title.localeCompare(b.title)
        return direction === 'asc' ? compare : -compare;
    })
}
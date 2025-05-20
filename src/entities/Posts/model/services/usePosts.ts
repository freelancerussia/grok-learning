import {useFetch} from "../../../../shared/hooks/useFetch.ts";
import {useMemo, useState} from "react";
import type {IPost} from "../types/Post.ts";
import {sortPosts} from "../../lib/sortPosts.ts";

export const usePosts = () => {
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const {data, loading, error} = useFetch<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    // const sortedPosts = data ? sortPosts(data, sortDirection) : [];
    const sortedPosts = useMemo(
        () => (data ? sortPosts(data, sortDirection) : []),
        [data, sortDirection]
    );
    const toggleSort = () => {
        setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    return {
        posts: sortedPosts,
        loading,
        error,
        sortDirection,
        toggleSort
    };
}
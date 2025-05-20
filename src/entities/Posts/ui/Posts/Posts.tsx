import Post from "../Post/Post.tsx";
import s from './Posts.module.scss'
import {usePosts} from "../../model/services/usePosts.ts";
import {Button} from "../../../../shared/ui/Button/Button.tsx";
import {useMemo, useState} from "react";

const Posts = () => {
    const [searchedPost, setSearchedPost] = useState('')
    const {posts, loading, error, sortDirection, toggleSort} = usePosts()
    const filteredPosts = useMemo(() => {
        if (!searchedPost) return posts
        return posts.filter(post => post.title.includes(searchedPost))
    }, [searchedPost, posts]);
    if (loading) return <div>Загрузка...</div>
    if (error) return <div>{error}</div>
    if (!posts) return <div>Нет данных</div>
    return (
        <div className={s.container}>
             <Button onClick={toggleSort}>{sortDirection === 'asc' ? 'По возрастанию':'По убыванию'}</Button>
            <input type="text" placeholder="Поиск по названию" value={searchedPost} onChange={
                (e)=>setSearchedPost(e.target.value)
            }/>
            <div className={s.posts}>
                {
                    filteredPosts.map(post => (
                        <Post key={post.id} id={post.id} title={post.title} body={post.body}/>
                    ))
                }
            </div>
        </div>

    );
};

export default Posts;
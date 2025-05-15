import Post from "../Post/Post.tsx";
import s from './Posts.module.scss'
import {usePosts} from "../../model/services/usePosts.ts";
import {Button} from "../../../../shared/ui/Button/Button.tsx";

const Posts = () => {
    const {posts, loading, error, sortDirection, toggleSort} = usePosts()
    if (loading) return <div>Загрузка...</div>
    if (error) return <div>{error}</div>
    if (!posts) return <div>Нет данных</div>
    return (
        <div className={s.container}>
             <Button onClick={toggleSort}>{sortDirection === 'asc' ? 'По возрастанию':'По убыванию'}</Button>
            <div className={s.posts}>
                {
                    posts.map(post => (
                        <Post key={post.id} id={post.id} title={post.title} body={post.body}/>
                    ))
                }
            </div>
        </div>

    );
};

export default Posts;
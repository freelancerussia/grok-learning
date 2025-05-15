import s from './Post.module.scss'
import type {FC} from "react";
import type {IPost} from "../../model/types/Post.ts";

const Post:FC<IPost> = ({ id, title, body}) => {
    return (
        <div  className={s.post}>
            {id}
            <h4 className={s.title}>
                {title}
            </h4>
            <p className={s.body}>
                {body}
            </p>
        </div>
    );
};

export default Post;
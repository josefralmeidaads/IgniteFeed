import React from 'react';

import styles from './Comment.module.css';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import Avatar from './Avatar';

interface ICommentItem {
  content: string;
}

interface IComment {
  comment: ICommentItem;
  handleDeleteComment: (comment: any) => void;
}

const Comment = ({ comment, handleDeleteComment }: IComment) => {
  return (
   <div className={styles.comment}>
    <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/69639482?v=4'/>

    <div className={styles.commentBox}>
     <div className={styles.commentContent}>
      <header>
       <div className={styles.authorAndTime}>
        <strong>Jose Almeida</strong>
        <time title="17 de Abril ás 15:21" dateTime="2024-04-17 15:21:30">Cerca de 1h atrás</time>
       </div>

       <button onClick={() => handleDeleteComment(comment)} title="Deletar comentário">
        <Trash size={24}/>
       </button>
      </header>

      <p>{comment.content}</p>
     </div>

     <footer>
      <button>
       <ThumbsUp size={20}/>
       Aplaudir <span>20</span>
      </button>
     </footer>
    </div>


   </div>
  );
}

export default Comment;
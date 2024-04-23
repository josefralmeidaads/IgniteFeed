import React from 'react';

import styles from './Comment.module.css';
import { ThumbsUp, Trash } from '@phosphor-icons/react';

const Comment = () => {
  return (
   <div className={styles.comment}>
    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/69639482?v=4" />

    <div className={styles.commentBox}>
     <div className={styles.commentContent}>
      <header>
       <div className={styles.authorAndTime}>
        <strong>Jose Almeida</strong>
        <time title="17 de Abril ás 15:21" dateTime="2024-04-17 15:21:30">Cerca de 1h atrás</time>
       </div>

       <button title="Deletar comentário">
        <Trash size={24}/>
       </button>
      </header>

      <p>Muito bom Devon, parabéns!! 👏👏</p>
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
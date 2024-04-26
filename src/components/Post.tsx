import React, { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css';
import Comment from './Comment';
import Avatar from './Avatar';

interface IContent {
  type: string;
  content: string;
}
export interface IPost {
  id: number,
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: IContent[];
}

interface IComment {
  content: string;
}

export interface IPostItem {
  post: IPost;
}

const Post = ({ post }: IPostItem) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR })
  
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCreateNewComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setComments([...comments, { content: newCommentText }])
    setNewCommentText('');
  }

  const handleNewCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewCommentText(e.target.value);
  }

  const deleteComment = (comment: IComment) => {
    const filteredComment = comments.filter((value) => value !== comment);
    setComments(filteredComment)
  }

  const handleNewCommentInvalid = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
   <article className={styles.post}>
    <header>
     <div className={styles.author}>
       <Avatar src={post.author.avatarUrl}/>

       <div className={styles.authorInfo}>
        <strong>{post.author.name}</strong>
        <span>{post.author.role}</span>
       </div>
     </div>

     <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

    </header>

    <div className={styles.content}>
      {post.content.map((line) => {
        if(line.type === 'paragraph'){
          return <p>{line.content}</p>
        } else {
          return <a href="">{line.content}</a>
        }
      })}
      <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
      </p>
    </div>

    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
      <strong>Deixei seu feedback</strong>

      <textarea
        name='comment'
        value={newCommentText}  
        placeholder='Deixei um comentário'
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />

      <footer>
        <button 
          type="submit" 
          disabled={isNewCommentEmpty}
        >
          Publicar
        </button>
      </footer>
    </form>

    <div className={styles.commentList}>
      {comments.map((comment, index) => (
        <Comment
          key={index} 
          comment={comment}
          handleDeleteComment={(comment) => deleteComment(comment)}
        />
      ))}
    </div>
   </article>
  );
}

export default Post;
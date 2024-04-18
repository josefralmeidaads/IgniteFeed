import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
   <article className={styles.post}>
    <header>
     <div className={styles.author}>
       <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/69639482?v=4" alt="" />

       <div className={styles.authorInfo}>
        <strong>Jose Almeida</strong>
        <span>Web Developer</span>
       </div>
     </div>

     <time title="17 de Abril ás 15:21" dateTime="2024-04-17 15:21:30">Publica há 1</time>

    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>
        Acabei de subir mais um projeto no meu portifa. 
        É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </p>

      <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

      <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
      </p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixei seu feedback</strong>

      <textarea  
        placeholder='Deixei um comentário'
      />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
   </article>
  );
}

export default Post;
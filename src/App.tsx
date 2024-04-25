import Header from './components/Header';
import Sidebar from './components/Siderbar';
import Post, { IPost } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts:IPost[] = [
  {
    id: 1,
    author: {
      name: 'Jose Almeida',
      avatarUrl: 'https://avatars.githubusercontent.com/u/69639482?v=4',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-04-27 10:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-04-26 19:30:05'),
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post, index) => (
            <Post
              key={post.id} 
              post={post}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App

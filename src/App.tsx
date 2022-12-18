import { FC, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { getJsonPosts } from 're-ducks/json-placeholders/action';
import { JsonState } from 're-ducks/json-placeholders/type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores/types';
import { TodoContainer } from 'TodoComponent/Container/TodoContainer';
// import reactLogo from './assets/react.svg';
// const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  const [post, setPosts] = useState([]);
  const jsonState = useSelector<RootState, JsonState>(
    (state) => state.jsonReducer
  );
  console.log('aaaaa', jsonState.posts);

  const dispatch = useDispatch();
  // console.log('post', post[0]);
  // console.log('post', typeof post[0]);
  console.log(post.length);

  const a = {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  };
  type b = typeof a;

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        console.log('res', res);

        dispatch(getJsonPosts(res.data));
      } catch (error) {
        console.log(error);
      }
      //  .then((res) => {
      //     setPosts(res.data);
      //   });
    };
    void load();
  }, [dispatch]);
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
  //     setPosts(res.data);
  //   });
  // }, []);

  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
};

export default App;

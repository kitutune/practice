import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios';
import { getJsonPosts } from 're-ducks/json-placeholders/action';
import { JsonState } from 're-ducks/json-placeholders/type';
import { useDispatch } from 'react-redux';

type GetPostsReturnType = {
  posts: JsonState['posts'];
};

export const useGetPosts = (): GetPostsReturnType => {
  //   type PostsType = Pick<JsonState["posts"], 'userId'|"id"|"comments">;
  const [posts, setPosts] = useState<Posts>();
  const url = 'https://jsonplaceholder.typicode.com';

  const dispatch = useDispatch();
  useEffect(() => {
    const load = async () => {
      const options: AxiosRequestConfig = {
        url: `${url}/posts`,
        method: 'GET',
      };
      try {
        const res: AxiosResponse<Posts> = await axios(options);
        const { data, status } = res;
        // console.log('res', res);
        // console.log('res', res.data);
        setPosts(data);
        // 必要ないがセット
        dispatch(getJsonPosts(res.data));
      } catch (e) {
        if (isAxiosError(e)) {
          console.log(e);
        }
      }
    };
    void load();
  }, [dispatch]);

  return { posts };
};

const postsSample = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
];
type Posts = typeof postsSample;

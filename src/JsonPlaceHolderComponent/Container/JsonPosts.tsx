import { FC, useEffect, useState } from 'react';
import { DataTable } from 'mantine-datatable';
import { JsonState } from 're-ducks/json-placeholders/type';
import { useSelector } from 'react-redux';
import { useGetPosts } from 'hooks/useGetPosts';
import { RootState } from 'stores/types';

const PAGE_SIZE = 30;
export const JsonPosts: FC = () => {
  const jsonState = useSelector<RootState, JsonState>(
    (state) => state.jsonReducer
  );
  const posts = useGetPosts();
  // const dispatch = useDispatch();
  console.log(posts);

  //   const rows = jsonState?.posts?.map((posts, index) => (
  //     <tr key={index}>
  //       <td>{posts.userId}</td>
  //       <td>{posts.id}</td>
  //       <td>{posts.title}</td>
  //       <td>{posts.userId}</td>
  //     </tr>
  //   ));

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(jsonState.posts?.slice(0, PAGE_SIZE));
  //   useEffect(() => {
  //     const load = async () => {
  //       try {
  //         const res = await axios.get(
  //           'https://jsonplaceholder.typicode.com/posts'
  //         );
  //         console.log('res', res);
  //         console.log('res', res.data);

  //         dispatch(getJsonPosts(res.data));
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     void load();
  //   }, [dispatch]);
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
  //     setPosts(res.data);
  //   });
  // }, []);
  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(jsonState?.posts?.slice(from, to));
  }, [jsonState?.posts, page]);

  return (
    <div className="App" style={{ height: '600px' }}>
      {/* <Table>
            <thead>
              <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
              <tbody>
                {rows}
              </tbody>
          </Table> */}
      {/* <TodoContainer /> */}
      {/* 参考 https://icflorescu.github.io/mantine-datatable/examples/pagination */}
      <DataTable
        withBorder
        records={records}
        columns={[
          {
            accessor: 'userId',
            //  width: 100
          },
          {
            accessor: 'id',
            // width: 100
          },
          {
            accessor: 'title',
            // width: '100%'
          },
          {
            accessor: 'body',
            // textAlignment: 'right',
            // width: 120,
          },
        ]}
        totalRecords={jsonState.posts?.length}
        recordsPerPage={PAGE_SIZE}
        // recordsPerPage={30}
        page={page}
        onPageChange={(p) => setPage(p)}

        // uncomment the next line to use a custom loading text
        // loadingText="Loading..."
        // uncomment the next line to display a custom text when no records were found
        // noRecordsText="No records found"
        // uncomment the next line to use a custom pagination text
        // paginationText={({ from, to, totalRecords }) => `Records ${from} - ${to} of ${totalRecords}`}
        // uncomment the next line to use a custom pagination color (see https://mantine.dev/theming/colors/)
        // paginationColor="grape"
        // uncomment the next line to use a custom pagination size
        // paginationSize="md"
      />
    </div>
  );
};

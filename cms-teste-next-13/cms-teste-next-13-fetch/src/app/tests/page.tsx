import Link from 'next/link'
import axios from 'axios';

const getData = async () => {
  try {
    const url = 'https://httpstat.us/200'; // 200 // 400 // 500
    // const data = JSON.stringify({ nome: nome });
    // const headers = { "Content-Type" : "application/json" };
    // const response = axios.post( url, data, { headers: headers });
    const response = await axios.get(url);

    return response.data;
  } catch (error: any) {
    return error.message; // return error.response.data;
  }
}

const getDataExample = async () => {
  const url = 'https://httpstat.us/202';
  const response = await axios.get(url);
  return response.data;
}

type PostProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await axios.get<PostProps[]>(url);
  return response.data;
}

export default async function TestePage() {

  //const response = await getData();
  //const [response1, response2] = await Promise.all([getData(), getDataExample()]);
  //console.log({ response, response1, response2 });

  // http://localhost:3000/tests

  // const posts = await getPosts();
  const postsData: Promise<PostProps[]> = getPosts();
  const posts = await postsData;
  //console.log(posts[0]);

  const results: JSX.Element[] = [];

  posts.forEach(post => {
    results.push(
      <div key={post.id}>
        {/* <p>id: {post.id}</p> */}
        {/* <p>userId: {post.userId}</p> */}
        <p>title: {post.title}</p>
        {/* <p>body: {post.body}</p> */}
        {/* <br /> */}
      </div>
    )
  });

  return (
    <>

      <h2>Tests with Axios</h2>
      <h1><Link href="/">Back to Home</Link></h1>
      <br />

      <h6>Posts</h6>

      {results}
      {/* {posts.forEach(post => <p key={post.id}>{post.title}</p>)} */}
      {/* {posts?.map(post => <p key={post.id}>{post.title}</p>)} */}

      {/* {
        posts?.forEach(post => {
          return (
            <>
              <div key={post.id}>
                <p>userId: {post.userId}</p>
                <p>title: {post.title}</p>
                <p>body: {post.body}</p>
                <br />
              </div>
            </>
          )
        })
      } */}

    </>

  )
}

import Link from "next/link";
import { useRouter } from "next/router"

export default function PostDetails({post}){
  //const router = useRouter();
  //const {id} = router.query;

  return <>
    <h1>{post.title} {post.id}</h1>
    <p>{post.body}</p>
    <Link href="/posts">Retour vers la liste des articles</Link>
  </>
}

/*export async function getServerSideProps({params}){
  //console.log(params.id);
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts/"+params.id);
  const post = await reponse.json();

  return {
    props : {post}
  }
}*/

export async function getStaticProps({params}){
  const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await reponse.json();

  return{
    props : {post}
  }

}

export async function getStaticPaths(){
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await reponse.json();

  const ids = posts.map(post=> post.id)
  const paths = ids.map((id)=>({params : {id : id.toString()}}))

  return {
    paths,
    fallback : false
  }
}

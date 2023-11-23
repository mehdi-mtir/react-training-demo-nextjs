import Link from "next/link";

export default function ListPosts(props) {
  return <>
    <h1>Liste des postes</h1>
    <ul>
      {
        props.posts.map(post=><li><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)
      }
    </ul>
  </>
}

/*export async function getServerSideProps(){

}*/

export async function getStaticProps(){
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await reponse.json();

  return {
    props : {posts}
  }

}


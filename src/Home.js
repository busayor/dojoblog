
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {/* check if blogs is not null then show the Component BlogList*/}
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs"/> */}
        </div>
    );
}
 
export default Home;
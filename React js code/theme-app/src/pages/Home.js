import { useTheme } from "../themeContext";


const Home= ()=>{
    const { theme } = useTheme();

    return(
        <div className={`page ${theme}`}>
            <h1> Home page</h1>
        </div>
    )
}

export default Home;
import { useTheme } from "../themeContext";


const About= ()=>{
    const { theme } = useTheme();

    return(
        <div className={`page ${theme}`}>
            <h1> You're on about us page !!!</h1>
        </div>
    )
}

export default About;
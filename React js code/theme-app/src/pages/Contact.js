import { useTheme } from "../themeContext";


const Contact= ()=>{
    const { theme } = useTheme();

    return(
        <div className={`page ${theme}`}>
            <h1> You're on contact page !!</h1>
        </div>
    )
}

export default Contact;
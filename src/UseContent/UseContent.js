import { useState, createContext } from "react"
import Content from "./Content"
import './UseContent.css'

export const ThemeContext = createContext()


function UseContent() {
    const [theme, setTheme] = useState('dark')
    const toggleTHeme =() =>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <ThemeContext.Provider value={theme}>
            <div style={{padding: 20}}>
                <button onClick={toggleTHeme}> Toggle theme</button>
                <Content  />
            </div>
        </ThemeContext.Provider>
        
    )
}
export default UseContent
import { useContext } from 'react'
import {ThemeContext} from './UseContent'

function Paragraph() {

    const theme = useContext(ThemeContext)
    return (
        <p className={theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
    )
}
export default Paragraph
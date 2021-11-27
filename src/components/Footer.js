import axios from "axios"
import {useEffect} from "react"
function Footer() {

    useEffect(function(){
    const apiKey ='vKgSlbA9IvP9mzh808UAXFD7YeIabsQe'
    axios({
        url: 'https://api.giphy.com/v1/gifs/search', 
        params: {
            api_key: apiKey,
            q: 'cheeseburgers', 
        }
    }).then((response) => {
        const array = response.data.data
         const random = array[Math.floor(Math.random() * array.length)]
         console.log(random)
        })
}, [])

    return (
        <footer>
            <div className="wrapper">
                <a href="https://junocollege.com/">Created at Juno College</a>
                <div className="flexBox">
                    <a href="https://github.com/dearJuno">
                        <p>dearJuno | </p>
                        {/* <FontAwesomeIcon icon={faGithub} /> */}
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
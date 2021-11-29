import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <footer>
            <div className="wrapper flexBox footer">
                <a href="https://junocollege.com/">Created at Juno College</a>
                    <a class="dearJuno" href="https://github.com/dearJuno">
                        dearJuno |
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
            </div>
        </footer>
    )
}

export default Footer
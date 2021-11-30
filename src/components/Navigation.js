import { ReactComponent as LogoSvg } from './logo.svg';

function Navigation() {
    return (
            <div className="wrapper navBox">
                <div className="logo">
                    <LogoSvg />
                </div>
                <h1>Out of Context</h1>
            </div>
    )
}

export default Navigation;
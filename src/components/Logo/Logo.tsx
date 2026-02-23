import logo from '../../assets/saga-logo.svg'

export default function Logo () {
    return (
        <div className="logo-container">
            <img className="logo" src={logo} alt="Saga Logo" />
        </div>
    )
}
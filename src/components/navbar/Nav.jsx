import "./style.css"
import logo from "./Снимок экрана 2024-11-04 204337.png"


const Nav = () => {
    return(
        <>
          <nav>
            <b>О нас</b>
            <b>Почему мы</b>
            <img src={logo} alt=""/>
            <b>Услуги и товары</b>
            <b>Контакты</b>
        </nav>
        </>
    )
}

export default Nav;
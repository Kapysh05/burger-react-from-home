import Style from './Header.module.css'
import logo from '../../assets/img/logo.svg'
import { Container } from '../Container/Container'

export const Header = () => (
    <header className={Style.header}>
        <Container className={Style.header__container}>
          <img className={Style.header__logo} src={logo} alt="Логотип YourMeal"/>
                <div className={Style.header__wrapper}> 
            <h1 className={Style.header__title}>
                <span>Только самые</span>
                <span className={Style.header__red}>сочные бургеры!</span>
            </h1>
                <p className={Style.header__appeal}>Бесплатная доставка от 599₽</p>
          </div>
        </Container>
    </header>
)
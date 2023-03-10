import { Container } from '../Container/Container'
import Style from './Navigation.module.css'
import classNames from 'classnames'

export const Navigation = () => {

    return (
    <nav className={Style.navigation}>
      <Container className={Style.container}>
        <ul className={Style.list}>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_burger, Style.button_active)}>Бургеры</button>
          </li>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_snack)}>Закуски</button>
          </li>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_hotdog)}>Хот-доги</button>
          </li>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_combo)}>Комбо</button>
          </li>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_shawarma)}>Шаурма</button>
          </li>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_pizza)}>Пицца</button>
          </li>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_wok)}>Вок</button>
          </li>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_dessert)}>Десерты</button>
          </li>
          <li className={Style.item}>
            <button className={classNames(Style.button, Style.button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Container>
    </nav>
    )
}
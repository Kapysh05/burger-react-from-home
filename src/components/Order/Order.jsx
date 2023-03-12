import { OrderGoods } from '../OrderGoods/OrderGoods';
import Style from './Order.module.css'

const OrderList = [
    'Супер сырный',
    'Картошка фри',
    'Жгучий хот-дог'
];

export const Order = () => {

    return (
        <div className={Style.order}>
            <section className={Style.wrapper}>
                <div className={Style.header} tabIndex="0" role="button">
                    <h2 className={Style.title}>Корзина</h2>

                    <span className={Style.count}>4</span>
                </div>

                <div className={Style.wrap_list}>
                    <ul className={Style.list}>
                        {OrderList.map(item => <OrderGoods item={item}/>)}
                    </ul>

                    <div className={Style.total}>
                        <p>Итого</p>
                        <p>
                            <span className={Style.amount}>1279</span>
                            <span className={Style.currency}>₽</span>
                        </p>
                    </div>

                    <button className={Style.submit}>Оформить заказ</button>

                    <div className={Style.apeal}>
                        <p className={Style.text}>Бесплатная доставка</p>
                        <button className={Style.close}>Свернуть</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
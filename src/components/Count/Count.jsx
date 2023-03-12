import Style from './Count.module.css'

export const Count = (props) => (
    <div className={Style.count}>
        <button className={Style.minus}>-</button>
        <p className={Style.amount}>{props.Count}</p>
        <button className={Style.plus}>+</button>
    </div>
)
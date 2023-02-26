import Style from './Container.module.css'
import classNames from 'classnames'

export const Container = ({children, className}) => (
    <div className={classNames(Style.container, className)}>
        {children}
    </div>
)
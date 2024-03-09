import React, { MouseEventHandler, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
import { constants } from '../../../../../core/constants';
import { AppDispatch } from '../../../../../core/store';
import { decreaseAmount, deleteProductInCart, increaseAmount } from '../../../../../core/api/cart';

const cx = classNames.bind(styles);

interface ICatalogItemProps {
    id: number;
    title: string;
    imageId: string;
    amount: number;
}
export const CardInCart: React.FC<ICatalogItemProps> = (props) => {
    const dispatch: AppDispatch = useDispatch();
    const name = props.title.length > 30 ? props.title.slice(0, 30).trim() + '...' : props.title;
    const [amount, setAmount] = useState(props.amount);

    const handleIncreaseAmount: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(increaseAmount(props.id));
        setAmount(amount + 1);
    };

    const handleDecreaseAmount: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(decreaseAmount(props.id));
        setAmount(amount - 1);
    };

    const handleDeleteProductInCart: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(deleteProductInCart(props.id));
    };

    return (
        <div>
            <div className={cx(styles.cartItem)}>
                <img
                    className={styles.image}
                    src={`${constants.imageUrl}${props.imageId}`}
                    alt={props.imageId.toString()}
                />
                <div className={'m-8 flex w-full text-4xl'}>{name}</div>
                <div className={styles.amount}>
                    <div className={styles.countSwitch}>
                        <button className={styles.btnSwitch} onClick={handleIncreaseAmount}>
                            +
                        </button>
                        <button>{amount.toString()}</button>
                        <button className={styles.btnSwitch} onClick={handleDecreaseAmount}>
                            -
                        </button>
                    </div>
                </div>
                <div className={styles.delBtn}>
                    <button className={'h-[45px] w-[45px] rounded border-2'} onClick={handleDeleteProductInCart}>
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
};

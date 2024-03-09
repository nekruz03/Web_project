import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './index.module.scss';
import { ru } from './i18n/ru';
import { IFormData } from '../../../../../core/api/form';
import { RootState } from '../../../../../core/store';
import 'react-toastify/dist/ReactToastify.css';
import { ICartProduct } from '../../../../../core/api/cart/types';
import { deleteAll } from '../../../../../core/api/cart';

export const SendfForm: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.cart);

    const [formData, setFormData] = useState<IFormData>({
        fio: '',
        phone: '',
        company: '',
        email: '',
        description_by_customer: '',
        request_product: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cartProducts =
            data?.map((x: ICartProduct) => ({
                product_id: x?.id,
                count: x?.amount,
            })) || [];

        setFormData((prevData) => ({
            ...prevData,
            request_product: cartProducts,
        }));

        axios
            .post('http://213.109.204.240:8000/api/v1/request_for_product/', formData)
            .then(() => {
                toast.success(ru.successMsg);
                dispatch(deleteAll());
            })
            .catch(() => toast.error(ru.errorMsg));
    };

    return (
        <div className={styles.formCont}>
            <div className={styles.temp}>
                <form className={styles.clientForm} action="" method="post" onSubmit={handleSubmit} id="form">
                    <input
                        id={'input1'}
                        className={styles.inp}
                        type="text"
                        name="fio"
                        value={formData.fio}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.fio}
                    />
                    <input
                        id={'input2'}
                        className={styles.inp}
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.phone}
                    />
                    <input
                        id={'input3'}
                        className={styles.inp}
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.company}
                    />
                    <input
                        id={'input4'}
                        className={styles.inp}
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.email}
                    />
                    <input
                        id={'input5'}
                        className={styles.inp}
                        type="text"
                        name="description_by_customer"
                        value={formData.description_by_customer}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.comment}
                    />
                    <button className={styles.btnSend} type="submit">
                        {ru.send}
                    </button>
                    <ToastContainer position="bottom-right" />
                </form>
            </div>
        </div>
    );
};

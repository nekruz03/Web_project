import React from 'react';
import { useSelector } from 'react-redux';
import { ru } from './i18n/ru.ts';
import { RootState } from '../../../core/store/index.ts';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Title } from '../../components/UI/Text/Title';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CardInCart } from '../../components/UI/Card/CardInCart';
import { SendfForm } from '../../components/UI/Card/SendForm';
import { ICartProduct } from '../../../core/api/cart/types.ts';

export const Cart: React.FC = () => {
    const data = useSelector((state: RootState) => state.cart);

    return (
        <>
            <Header />
            <ContentWrapper>
                <div className={'mb-36 mt-5 grid grid-cols-12 gap-14'}>
                    <Title name={ru.title} />
                </div>
                <div className={'flex flex-wrap gap-7'} id={'itemsInCart'}>
                    {data?.map((x: ICartProduct) => (
                        <CardInCart
                            key={x?.id}
                            id={x?.id}
                            title={x?.title}
                            imageId={x?.imageId.toString()}
                            amount={x?.amount}
                        />
                    ))}
                </div>
            </ContentWrapper>
            <SendfForm />

            <Footer />
        </>
    );
};

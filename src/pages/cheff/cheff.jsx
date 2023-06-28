import React from 'react';
import { useState, useEffect } from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Icon from '../../assets/iconCheff.png';
import './cheff.css'
import CardOrderCheff from '../../Components/cardOrderCheff/cardOrderCheff'
import api from '../../api_client/api';


export default function Cheff() {

    const token = localStorage.getItem('token');
    const [order, setOrder] = useState([])
    const [breakfasts, setBreakfasts] = useState([])
    const [lunches, setLunches] = useState([])
    //llamar a la api con los productos
    useEffect(() => {
      async function fetchProducts() {
        const result = await api().fetchProducts({ token });
        setOrder(result);
        // setLunches(result.lunches);
      }
      fetchProducts();
    }, [])
    console.log('productos',order)

    const [orderId, setOrdeId] = useState([])
    const [orderStatus, setOrderStatus] = useState([])
    //llamar a la api para editar los productos que ya tienes en la - Const order -
    const changeStatus = async ()  =>  {
    const result = await api().changeStatus(order);
    setOrdeId(result.id);
    setOrderStatus(result.id);
}
    console.log('--Id--',orderId, '--Status--',orderStatus )





    return (
        <>
            <div className='global-container-cheff'>
                <header>
                    <div className='box-text-logout'>
                        <Logout text='Cheff' icon={Icon} />
                    </div>
                    <LogoBurger />
                </header>

                <main>
                    <CardOrderCheff />

                </main>



            </div>

        </>
    )
}
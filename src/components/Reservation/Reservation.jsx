import React from 'react'
import Button from '../Button/Button'
import "./Reservation.css"
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import reservationPhone from '/reservation-phone.svg'
import reservationMessage from '/reservation-message.svg'
import reservationLocation from '/reservation-location.svg'

export default function Reservation() {
    //Lang
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }



    // Send message
    const sendMessage = (event) => {
        event.preventDefault();
        const token = "6807646236:AAGeUZUjG8k_owEhXgSmLi_yZDMzbLXw4cQ";
        const chatID = 806346535;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const guest = document.getElementById("guest").value;
        const date = document.getElementById("date").value;
        const destination = document.getElementById("destination").value;
        const country = document.getElementById("country").value;


        const messageContent = `ID: ${name}\nPhoneNumber: ${number}\nNumber Of Guests: ${guest}\nDate: ${date}\nChoose Your Destination: ${destination}\nCountry: ${country} `
        axios({
            url: url,
            method: 'POST',
            data: {
                "chat_id": chatID,
                "text": messageContent,

            }
        }).then((res) => {
            document.getElementById("reservationForm").reset();
            alert("Успешно отправлено")
        }).catch((error) => {
            console.log("Что то пошло не так!");
        })
    }

    return (
        <section>
            <div className="reservation-up">
                <h4>{t('reservation.up.h4')}</h4>
                <hr />
                <h2>{t('reservation.up.h2')}</h2>
                <Button >{t('reservation.up.btn')}</Button>

                <div className="container">
                    <div className="reservation-cards">
                        <div className="reservation-card">
                            <div className="reservation-card__img">
                                <img src={reservationPhone} alt="" />
                            </div>
                            <p className='reservation-card__title' >{t('reservation.card.title.first')}</p>
                            <a href="tel:+998992999996">+998992999996</a>
                        </div>
                        <div className="reservation-card">
                            <div className="reservation-card__img">
                                <img src={reservationMessage} alt="" />
                            </div>
                            <p className='reservation-card__title'>{t('reservation.card.title.second')}</p>
                            <a href="zamonbiznestour@mail.ru">zamonbiznestour@mail.ru</a>
                        </div>
                        <div className="reservation-card">
                            <div className="reservation-card__img">
                                <img src={reservationLocation} alt="" />
                            </div>
                            <p className='reservation-card__title' >{t('reservation.card.title.third')}</p>
                            <a href="/">{t('reservation.card.title.fourth')}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reservation-center">

                <div className="container">
                    <iframe className='reservation-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.6158556605287!2d69.16316215393468!3d41.280279049443514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2z0KfQuNC70LDQvdC30LDRgC0yNSwgMTAwMTUyLCDQotCw0YjQutC10L3Rgiwg0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1716960624060!5m2!1sru!2s"></iframe>
                    <div className="reservation-wrapper">
                        <h2 className='reservation-title'>Make Your <span>Reservation</span> Through This <span>Form</span> </h2>
                        <form id='reservationForm' onSubmit={sendMessage}>
                            <div className="reservation-first__box">
                                <div className="div">
                                    <label htmlFor="text">{t('reservation.form.name.name')}</label>
                                    <input type="text" id='name' placeholder={t('reservation.form.name.pholder')} required />
                                </div>

                                <div className="div">
                                    <label htmlFor="">{t('reservation.form.number.name')}</label>
                                    <input type="text" id='number' placeholder={t('reservation.form.number.pholder')} required />
                                </div>
                            </div>


                            <div className="reservation-second__box">
                                <div className="div">
                                    <label htmlFor="">{t('reservation.form.guest.name')}</label>
                                    <select id='guest' className='reservation-select'>
                                        <option>{t('reservation.form.guest.pholder')}</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4+</option>
                                    </select>

                                </div>
                                <div className="div input-date">
                                    <label htmlFor="">{t('reservation.form.date.name')}</label>
                                    <input type="date" id='date' required />
                                </div>

                            </div>

                            <div className="div">
                                <label htmlFor="">{t('reservation.form.destination.name')}</label>
                                <select id='destination' className='reservation-select'>
                                    <option>{t('reservation.form.destination.first')}</option>
                                    <option>{t('reservation.form.destination.second')}</option>
                                    <option>{t('reservation.form.destination.third')}</option>
                                    <option>{t('reservation.form.destination.fourth')}</option>
                                    <option>{t('reservation.form.destination.fifth')}</option>
                                    <option>{t('reservation.form.destination.sixth')}</option>
                                    <option>{t('reservation.form.destination.seventh')}</option>
                                </select>
                            </div>
                            <div className="div">
                                <label htmlFor="">{t('reservation.form.country.name')}</label>
                                <select id='country' className='reservation-select'>
                                <option>{t('reservation.form.country.country')}</option>
                                    <option>{t('reservation.form.country.first')}</option>
                                    <option>{t('reservation.form.country.second')}</option>
                                    <option>{t('reservation.form.country.third')}</option>
                                    <option>{t('reservation.form.country.fourth')}</option>
                                    <option>{t('reservation.form.country.fifth')}</option>
                                    <option>{t('reservation.form.country.sixth')}</option>
                                    <option>{t('reservation.form.country.seventh')}</option>
                                    <option>{t('reservation.form.country.eighth')}</option>
                            
                                    <option>{t('reservation.form.country.tenth')}</option>
                                </select>
                            </div>

                            <button className='btn-grad' type='submit'>{t('reservation.form.btn')}</button>

                        </form>
                    </div>
                </div>
            </div>

            <div className="reservation-down">
                <div className="container">
                    <div className="reservation-down__wrapper">
                        <div className="reservation-left">
                            <h2>Are You Looking To Travel ?</h2>
                            <h4>Make A Reservation By Clicking The Button</h4>
                        </div>
                        <div className="reservation-right">
                            <Button>{t('reservation.form.btn')}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

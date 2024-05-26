import React from 'react'
import Button from '../Button/Button'
import "./Reservation.css"
import axios from 'axios'

export default function Reservation() {
    // Send message
    const sendMessage = (event) => {
        event.preventDefault();
        const token = "6807646236:AAGeUZUjG8k_owEhXgSmLi_yZDMzbLXw4cQ";
        const chatID = 806346535;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const adress = document.getElementById("adress").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const day = document.getElementById("day").value;
        const add = document.getElementById("add").value;

        const messageContent = `ID: ${name}\nFull name: ${number}\nPhone number: ${adress}\nAddress: ${email}\nEmail: ${service}\nDay of service: ${day}\nAdd a note: ${add}`
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
            <div className="container">
                <div className="reservation-wrapper">
                    <h2 className='reservation-title'>Make Your <span>Reservation</span> Through This <span>Form</span> </h2>
                    <form id='reservationForm' onSubmit={sendMessage}>
                        <div className="reservation-first__box">
                            <div className="div">
                                <label htmlFor="text">Your Name</label>
                                <input type="text" id='name' placeholder='Ex. John Smithee' required />
                            </div>

                            <div className="div">
                                <label htmlFor="">Your Phone Number</label>
                                <input type="text" id='number' placeholder='Ex.+998......' required />
                            </div>
                        </div>


                        <div className="reservation-second__box">
                            <div className="div">
                                <label htmlFor="">Number Of Guests</label>
                                <select className='reservation-select'>
                                    <option>ex. 3 or 4 or 5</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4+</option>
                                </select>

                            </div>
                            <div className="div input-date">
                                <label htmlFor="">Check In Date</label>
                                <input type="date" id='email' required />
                            </div>

                        </div>

                        <div className="div">
                            <label htmlFor="">Choose Your Destination</label>
                            <select className='reservation-select'>
                                <option>Antalya</option>
                                <option>Istanbul</option>
                                <option>Dubai</option>
                                <option>Sharm El-Sheikh</option>
                                <option>Kuala Lumpur</option>
                                <option>Canada</option>
                                <option>England</option>
                            </select>
                        </div>
                        <div className="div">
                            <label htmlFor="">Choose Your Visa Support</label>
                            <select className='reservation-select'>
                                <option>Country</option>
                                <option>USA</option>
                                <option>Evrope</option>
                                <option>England</option>
                                <option>Japan</option>
                                <option>Oman</option>
                                <option>Saudi Arabia</option>
                                <option>India</option>
                                <option>China</option>
                                <option>Hong Kong</option>
                            </select>
                        </div>

                        <button className='btn-grad' type='submit'>Make Your Reservation New</button>

                    </form>
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
                            <Button>Book Yours Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

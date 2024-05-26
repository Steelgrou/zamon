import React from 'react'
import Button from '../Button/Button'
import "./Reservation.css"

export default function Reservation() {
    return (
        <section>




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

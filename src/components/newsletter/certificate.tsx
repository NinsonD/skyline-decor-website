import React, { useCallback, useReducer, useRef, useState } from 'react'
import { Certificate } from 'crypto'
import newsLette1 from '../../../public/assets/img/shop-home/newsletter/news-2.jpg';
import newsLetter2 from '../../../public/assets/img/shop-home/newsletter/news-1.jpg';
import newsLetter3 from '../../../public/assets/img/shop-home/newsletter/news-3.jpg';
import newsLetter4 from '../../../public/assets/img/shop-home/newsletter/news-4.jpg';
import Image from 'next/image';
import Link from 'next/link';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer((state, action) => state, {});
  const ref = useRef(null)
};

function MyComponent2() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer((state, action) => state, {});
  const ref = useRef(null)
};

function MyComponent3() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer((state, action) => state, {});
  const ref = useRef(null)
};

function MyCOmponent4() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer((state, action) => state, {});
  const ref = useRef(null)
};

let MyComponent5 = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer((state, action) => state, {});
  const ref = useRef(null)
}   

const onSquareClick = useCallback(() => {
    console.log('clicked')
}, [])  

const certificate = () => {
  return (
    <div>
        <div className="tp-shop-newsletter-area tp-shop-newsletter-ptb pt-120 pb-85">
            <div className="container-fluid">
                <div className="row align-items-end">
                    <div className="col-xl-3">
                        <div className="tp-shop-newsletter-thumb text-xl-start text-end">
                            <Image data-speed="1.5" className="mb-70 img-left" src={newsLette1} alt="NewsLetter" />
                        </div>
                        <span className="tp-shop-newsletter-content z-index-1 text-center"> 
                            <h4 className="tp-shop-section-title fs-100 mb-20">NEWSLETTER</h4>
                            <span>-10% OFF YOUR 1ST <br /> ORDER</span>
                            <p>
                                Sign up for our newsletter to find out all about us, our news,  
                                our offers... {`We're`} not too chatty and {`we'll`} protect your email
                                like the apple of our eye.
                            </p>
                            <div className="tp-shop-newsletter-btn">
                                <Link className="tp-checkout-btn btn-plr text-uppercase" href="#">Subscribe</Link>
                            </div>
                            <div>
                                <div className="tp-shop-newsletter-thumb text-xl-start text-end">
                                    <div className='certificate'> 
                                        <Image data-speed="1.1" className="img-1" src={newsLetter3} alt="NewsLetter" />
                                        <div className='divertion-certificate'>
                                        <button className='square' onClick={onSquareClick}>{}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='name'>
                                    <Image data-speed="1.1" className="img-2" src={newsLetter4} alt="NewsLetter" />
                                    <div>
                                        <h4 className='name-title'>John Doe</h4>
                                        <span className='name-span'>CEO, Company</span>
                                        <div className='divertion-name'>
                                        <button className='square' onClick={onSquareClick}>{}</button>
                                        <button className='circle' onClick={onSquareClick}>{}</button>
                                        <button className='triangle' onClick={onSquareClick}>{}</button>
                                        <button className='rectangle' onClick={onSquareClick}>{}</button>
                                        <button className='diamond' onClick={onSquareClick}>{}</button>
                                        <button className='oval' onClick={onSquareClick}>{}</button>
                                        <button className='pentagon' onClick={onSquareClick}>{}</button>
                                        <button className='hexagon' onClick={onSquareClick}>{}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>    
        </div>                
    </div>
  )
}

export default certificate

function onClickeventListener(arg0: string, arg1: () => void) {
            throw new Error('Function not implemented.');
        }

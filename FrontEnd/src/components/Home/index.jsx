import React, { Component } from 'react';
import NavBar from '../NavBar';
import './style.css';

export default class Home extends Component {
    render() {
        return <section className='home'>
            <NavBar />
            <video autoPlay loop >
                <source src='../../assets/home/homebackground.mp4' type='video/mp4' />
            </video>
        </section>;
    }
}


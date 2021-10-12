import React, { Component } from "react";

import Typing from 'react-typing-animation';

import vector from '../../assets/vector.svg';
import image from '../../assets/img.svg';

import '../../transitions.css';

interface IPageState {

};

export default class Home extends Component<any, IPageState> {
    constructor(props: IPageState) {
        super(props);
    };

    render() {
        return (
            <div className='flex justify-center w-full pt-36 lg:pt-0 lg:grid lg:grid-cols-2 lg:pl-10 lg:h-5/6 font-display'>
                <form action={"#aboutMe"} className='flex flex-col items-center justify-center w-full lg:items-start'>
                    <Typing speed={150}>
                        <h1 className='text-3xl font-bold select-none lg:text-7xl text-texts'>Hey,</h1>

                        <h1 className='text-4xl font-bold select-none lg:text-7xl text-tertiary'>I am Guilherme</h1>

                        <h1 className='text-2xl font-bold select-none lg:text-5xl text-texts'>full stack developer</h1>
                    </Typing>
                    <button type='submit' className='w-11/12 p-4 mt-5 text-2xl border-2 efeito efeito-1 text-texts border-secondary'>
                        <i className="mr-2 fas fa-info-circle"></i>About me
                    </button>
                </form>
                <div className='items-center justify-end hidden mt-5 lg:flex'>
                    <img src={vector} alt="" className='w-7/12 images' />
                    <img src={image} alt="" className='absolute w-4/12 images ' />
                </div>
            </div >
        );
    };
};
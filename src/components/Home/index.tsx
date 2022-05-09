/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';

import image from '../../assets/img.svg';

import doc from '../../assets/docs/Currículo - Marcos Guilherme  Dev FullStack- Roxo.pdf';

import '../../transitions.css';

interface IPageState {}

export default class Home extends Component<any, IPageState> {
    constructor(props: IPageState) {
        super(props);
    }

    render() {
        return (
            <form
                action="#aboutme"
                className="flex items-center justify-center w-full grid-cols-2 md:grid h-5/6"
            >
                <div className="flex flex-col items-center justify-center ">
                    <div className="pb-4 pl-2 md:w-6/12">
                        <h1 className="text-3xl font-semibold md:text-xl lg:text-3xl font-display text-texts ">
                            Hello World, i'm the
                        </h1>
                        <h1 className="text-3xl font-semibold md:text-xl lg:text-3xl font-display text-secondary">
                            Guilherme Nunes,
                        </h1>
                        <span className="text-base text-tertiary font-secondary">
                            fullstack developer.
                        </span>
                    </div>

                    <div className="flex flex-col w-full gap-2 md:grid-cols-2 md:grid md:w-6/12">
                        <a
                            className="flex items-center justify-center text-sm border bg-secondary rounded-3xl text-texts hover:bg-primary border-secondary"
                            href={doc}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="mr-2 fas fa-file-download"></i>
                            Download CV
                        </a>
                        <button
                            type="submit"
                            className="flex items-center justify-center p-2 text-sm border border-secondary rounded-3xl text-texts box"
                        >
                            <i className="mr-2 fas fa-info" />
                            <h2 className="relative">About-me</h2>
                        </button>
                    </div>
                </div>

                <div className="items-center justify-center hidden md:flex">
                    <img src={image} alt="image" className="w-1/2 " />
                </div>
            </form>
        );
    }
}

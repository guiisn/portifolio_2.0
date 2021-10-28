/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';

import '../../transitions.css';

interface IPageState {}

export default class Header extends Component<any, IPageState> {
    constructor(props: IPageState) {
        super(props);
    }

    render() {
        return (
            <header className="grid w-full grid-cols-3 p-5 border-b border-secondary">
                <div className=""></div>
                <div className="text-xl font-semibold text-center text-texts font-display">
                    Portfolio
                </div>
                <div className="text-right">
                    <a
                        href="https://github.com/guiisn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-full text-texts hover:text-secondary">
                            <i className="text-xl fab fa-github"></i>
                        </button>
                    </a>
                </div>
            </header>
        );
    }
}

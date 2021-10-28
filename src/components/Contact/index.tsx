import React, { Component } from 'react';

const [number, msg] = [
    '5582996138682',
    'Olá Guilherme! Acessei seu portifólio e gostaria de saber se podemos bater um papo!',
];

const link_web = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    number
)}&text=${encodeURIComponent(msg)}`;

const link_app = `whatsapp://send?text=${encodeURIComponent(msg)}`;
interface IState {
    pequeno: any;
    grande: any;
}

export default class Contact extends Component<any, IState> {
    constructor(props: IState) {
        super(props);

        this.state = {
            grande: false,
            pequeno: false,
        };
    }

    componentDidMount() {
        if (window.screen.width < 640) {
            this.setState({ pequeno: true, grande: false });
        } else {
            this.setState({ grande: true, pequeno: false });
        }
    }

    render() {
        return (
            <div
                id="contacts"
                className="flex flex-col items-center justify-center pt-10 pb-10 pl-10 pr-10 lg:pt-28 font-display bg-primary text-texts"
            >
                <a
                    className="w-11/12 lg:w-1/2"
                    href={this.state.grande === true ? link_web : link_app}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="text-lg tracking-widest lg:text-xl text-tertiary font-secondary">
                        did you like my profile?
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-widest lg:text-4xl font-display text-secondary">
                        LETS WORK TOGETHER?
                        <i className="ml-2 fas fa-long-arrow-alt-right"></i>
                    </h1>
                </a>
                <div className="grid w-full grid-cols-4 pt-8 text-center lg:w-1/2">
                    <div>
                        <a
                            href={
                                this.state.grande === true ? link_web : link_app
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="p-3 rounded-full hover:bg-secondary hover:text-primary">
                                <i className="text-5xl fab fa-whatsapp"></i>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/guiisn/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="p-3 rounded-full hover:bg-secondary hover:text-primary">
                                <i className="text-5xl fab fa-instagram"></i>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/guiisn/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="p-3 rounded-full hover:bg-secondary hover:text-primary">
                                <i className="text-5xl fab fa-linkedin-in"></i>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://github.com/guiisn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="p-3 rounded-full hover:bg-secondary hover:text-primary">
                                <i className="text-5xl fab fa-github"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

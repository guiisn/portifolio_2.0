import React, { Component } from "react";

const [number, msg] = ["5582996138682", "Olá Guilherme! Acessei seu portifólio e gostaria de saber se podemos bater um papo!"]

const link_web = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`;

const link_app = `whatsapp://send?text=${encodeURIComponent(msg)}`
;

interface IState {
    pequeno: any,
    grande: any,
};

export default class Contact extends Component<any, IState> {
    constructor(props: IState) {
        super(props);
        
        this.state = {
            grande: false,
            pequeno: false,
        };
    };

    componentDidMount() {
        if (window.screen.width < 640) {
            this.setState({ pequeno: true, grande: false });
        } else {
            this.setState({ grande: true, pequeno: false })
        }
    }
    
    render() {
        return (
            <div className='flex justify-center pb-10 pl-10 pr-10 border-t h- border-tertiary font-display bg-primary text-texts'>
                <div className='grid w-full grid-cols-4 mt-20 mb-10 text-center lg:w-1/2'>
                    <div>
                        <a href={this.state.grande == true ? link_web : link_app} target="_blank" rel="noopener noreferrer">
                            <button className='p-3 rounded-full hover:bg-secondary hover:text-primary'><i className="text-5xl fab fa-whatsapp"></i></button>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/guiisn/" target="_blank" rel="noopener noreferrer">
                            <button className='p-3 rounded-full hover:bg-secondary hover:text-primary'><i className="text-5xl fab fa-instagram"></i></button>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/guiisn/" target="_blank" rel="noopener noreferrer">
                            <button className='p-3 rounded-full hover:bg-secondary hover:text-primary'><i className="text-5xl fab fa-linkedin-in"></i></button>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/guiisn" target="_blank" rel="noopener noreferrer">
                            <button className='p-3 rounded-full hover:bg-secondary hover:text-primary'><i className="text-5xl fab fa-github"></i></button>
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};
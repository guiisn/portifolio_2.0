/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

interface IProps {
    onClose: any;
    nome: any;
    modaVisible: any;
    descricao: any;
    tags: any;
    link: any;
    video: any;
}

export default class Modal extends Component<any, IProps> {
    render() {
        return (
            <div
                className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-screen bg-opacity-70 bg-primary"
                // onClick={this.props.onClose}
            >
                <div className="relative flex flex-col w-11/12 h-auto p-6 lg:w-6/12 rel bg-modal lg:h-2/3 rounded-2xl text-tertiary">
                    <button
                        onClick={this.props.onClose}
                        className="absolute flex items-center justify-center w-8 h-8 font-bold border border-green-200 rounded-full cursor-pointer select-none right-5 hover:text-secondary"
                    >
                        X
                    </button>

                    <div className="flex flex-col justify-between w-full h-full ">
                        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
                            <div>
                                <video
                                    src={this.props.video}
                                    className="w-full mt-12 max-h-56"
                                    controls
                                    autoPlay
                                    muted
                                ></video>
                            </div>
                            <div className="mt-0 lg:mt-12">
                                <h1 className="text-2xl font-bold text-texts">
                                    {this.props.nome}
                                </h1>
                                <span>{this.props.descricao}</span>
                                <div className="flex flex-row mb-6 lg:mb-0">
                                    {this.props.tags.map(
                                        (response: any, index: any) =>
                                            index + 1 <
                                            this.props.tags.length ? (
                                                <span className="mr-2 text-secondary">
                                                    {response},
                                                </span>
                                            ) : (
                                                <span className="text-secondary">
                                                    {response}.
                                                </span>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <a
                                className="w-24 pt-2 pb-2 pl-5 pr-5 border rounded-3xl bg-secondary text-texts hover:bg-primary border-secondary"
                                href={this.props.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="mr-2 text-xl fab fa-github"></i>
                                Ver no Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

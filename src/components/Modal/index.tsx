import React, { Component } from "react";

interface IProps {
    onClose: any,
    nome: any,
    modaVisible: any,
    descricao: any,
    tags: any,
};

export default class Modal extends Component<any, IProps> {


    render() {
        return (
            <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-opacity-70 bg-primary' onClick={this.props.onClose}>
                <div className='relative flex flex-col w-6/12 p-6 rel bg-texts h-2/4 rounded-2xl text-primary'>
                    <button onClick={this.props.onClose} className='absolute flex items-center justify-center w-8 h-8 font-bold border border-green-200 rounded-full cursor-pointer select-none right-5 hover:text-secondary' >X</button>
                    <h1 className='w-10/12 font-extrabold text-left '>{this.props.nome}</h1>
                    <h2 className='w-10/12 text-sm font-extralight'>{`${this.props.descricao}`}</h2>
                    <ul className='flex flex-row font-semibold'>
                        Tecnologias: 
                        {this.props.tags.map((response: any, index: any) =>
                            <li key={index} className='mr-2 text-secondary'>{index + 1 < this.props.tags.length ? `${response},` : `${response}.`}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    };
};
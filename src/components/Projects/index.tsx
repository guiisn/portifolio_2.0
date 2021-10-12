import React, { Component } from "react";

import { ControleEstoque, MaisSaudeMulher, Poke, CrudBasico } from '../listProjects';
import Modal from '../Modal/index';

import '../../transitions.css';

interface IPageState {
    isModalVisible: any,
    nome: any,
    descricao: any,
    techs: any,
};

const arr = [Poke, ControleEstoque, MaisSaudeMulher, CrudBasico];

const active = 'active';

export default class Projects extends Component<any, IPageState> {
    constructor(props: IPageState) {
        super(props);

        this.state = {
            isModalVisible: true,
            nome: '',
            descricao: '',
            techs: [],
        };

        this.hideModal = this.hideModal.bind(this);
    };

    hideModal = () => {
        this.setState({ isModalVisible: false });
    };

    render() {
        return (
            <div className='pb-10 pl-10 pr-10 border-t h- border-tertiary font-display bg-primary text-texts' id='projects'>
                {this.state.isModalVisible ? 
                    <Modal onClose={this.hideModal} modaVisible={this.state.isModalVisible} nome={this.state.nome} descricao={this.state.descricao} tags={this.state.techs} />
                    : null
                }
                <div
                    className={`grid mt-16 rounded-xl mb-16 grids gap-4`}>
                    {arr.map((element: any, index: any) =>
                        <div className='border-2 border-secondary rounded-2xl '>
                            <div
                                key={index} className={`p1`}>
                                <img src={element[0].image} className='h-full rounded-md images' alt="" />
                            </div>
                            <div
                                className='w-full mt-4 text-center bg-texts text-primary p2'>
                                <b>{element[0].nome}</b>
                                <br />
                                <br />
                                <a
                                    className='p-3 mr-2 border cursor-pointer border-primary' onClick={() => this.setState({ 
                                        isModalVisible: true,
                                        nome: element[0].nome, 
                                        descricao: element[0].descricao,
                                        techs: element[0].tags,
                                    })}
                                >Fotos
                                </a>
                                <a className='p-3 bg-secondary text-texts' href={element[0].link} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        );
    };
};
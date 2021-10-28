import React, { Component } from 'react';

import Modal from '../Modal/index';
import { arr } from '../listProjects';

import '../../transitions.css';

interface IPageState {
    isModalVisible: any;
    nome: any;
    descricao: any;
    techs: any;
    link: any;
    video: any;
}

// const arr = [Poke, ControleEstoque, MaisSaudeMulher, CrudBasico];

const active = 'active';

export default class Projects extends Component<any, IPageState> {
    constructor(props: IPageState) {
        super(props);

        this.state = {
            isModalVisible: false,
            nome: '',
            descricao: '',
            techs: [],
            link: '',
            video: '',
        };

        this.hideModal = this.hideModal.bind(this);
    }

    hideModal = () => {
        this.setState({ isModalVisible: false });
    };

    render() {
        return (
            <form
                id="projects"
                action={'#contacts'}
                className="flex flex-col items-center w-full bg-primary"
            >
                {this.state.isModalVisible ? (
                    <Modal
                        onClose={this.hideModal}
                        nome={this.state.nome}
                        descricao={this.state.descricao}
                        tags={this.state.techs}
                        link={this.state.link}
                        video={this.state.video}
                    />
                ) : null}
                <h1 className="flex justify-center text-3xl font-semibold text-texts font-display">
                    Projects
                </h1>
                <>
                    <div className="grid w-11/12 grid-cols-1 gap-2 mt-4 lg:grid-cols-2 lg:w-6/12 ">
                        {arr.map((response: any, index: any) => (
                            <div
                                className="relative flex items-center justify-center cursor-pointer bg-primary rounded-xl"
                                onClick={() =>
                                    this.setState({
                                        isModalVisible: true,
                                        nome: response[0].nome,
                                        descricao: response[0].descricao,
                                        techs: response[0].tags,
                                        link: response[0].link,
                                        video: response[0].video,
                                    })
                                }
                            >
                                <img
                                    src={response[0].image}
                                    alt={response[0].nome}
                                    className="transition-all transform opacity-10 rounded-xl image07"
                                />
                                <div className="absolute text-center">
                                    <h2 className="text-xl font-semibold text-secondary font-display">
                                        {response[0].nome}
                                    </h2>
                                    <div className="flex flex-row">
                                        {response[0].tags.map(
                                            (tags: any, index: any) =>
                                                index + 1 <
                                                response[0].tags.length ? (
                                                    <h2 className="text-sm font-secondary text-tertiary">
                                                        {tags},
                                                    </h2>
                                                ) : (
                                                    <h2 className="text-sm font-secondary text-tertiary">
                                                        {tags}.
                                                    </h2>
                                                )
                                        )}
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-5">
                                    <button
                                        className="text-sm w-28 text-texts bg-secondary rounded-xl"
                                        onClick={() =>
                                            this.setState({
                                                isModalVisible: true,
                                                nome: response[0].nome,
                                                descricao:
                                                    response[0].descricao,
                                                techs: response[0].tags,
                                                link: response[0].link,
                                                video: response[0].video,
                                            })
                                        }
                                    >
                                        Veja mais
                                        <i className="ml-2 fas fa-long-arrow-alt-right"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-start w-11/12 mt-4 lg:w-1/2">
                        <button
                            type="submit"
                            className="flex items-center justify-center w-1/2 p-2 text-sm border lg:w-1/4 border-secondary rounded-3xl text-texts box"
                        >
                            <h2>Contacts</h2>
                            <i className="ml-2 fas fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </>
            </form>
        );
    }
}

/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';

import foto from '../../assets/foto.jpeg';

interface IPageState {}

export default class AboutMe extends Component<any, IPageState> {
    constructor(props: IPageState) {
        super(props);
    }

    render() {
        return (
            <form
                id="aboutme"
                action="#techs"
                className="flex flex-col items-center h-auto pt-10 pb-28 bg-primary"
            >
                <h1 className="text-3xl font-semibold font-display text-texts">
                    About-me
                </h1>
                <div className="w-11/12 text-justify lg:w-1/2 ">
                    <span className="text-sm text-tertiary font-secondary md:text-lg">
                        Tenho 19 anos, sou natural do estado de Alagoas,
                        nordeste Brasileiro. Estou no 5º semestre da graduação
                        no curso de Ciência da Computação na UFAL- Universidade
                        Federal de Alagoas, campus Arapiraca. No ano de 2019
                        iniciei os estudos em programação, desde então venho me
                        especializando e cada vez mais me apaixonando pelo
                        desenvolvimento.
                    </span>
                    <br></br>
                    <span className="text-sm text-tertiary font-secondary md:text-lg">
                        Fui bolsista durante um período de 6 meses (maio 2021-
                        outubro 2021) em um programa de iniciação científica-
                        PIBIC, onde fiz parte do laboratório do projeto
                        <strong>
                            <a
                                href="http://falibras.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 hover:text-secondary"
                            >
                                Falibras
                            </a>
                        </strong>
                        .
                    </span>
                    <br></br>
                    <span className="text-sm text-tertiary font-secondary md:text-lg">
                        Trabalhei durante cerca de 3 meses como desenvolvedor
                        FrontEnd na{' '}
                        <strong>
                            <a
                                href="https://www.aemsolutions.com.br/"
                                target="_blank"
                                className="hover:text-secondary"
                            >
                                A&M Solutions
                            </a>
                        </strong>
                        , empresa focada em marketing digital e desenvolvimento
                        de softwares e aplicações.
                    </span>
                    <br></br>
                    <span className="text-sm text-tertiary font-secondary md:text-lg">
                        Me considero hoje um desenvolvedor FullStack, que atua
                        com as principais tecnologias que estão presentes no
                        mercado. Meus estudos/ área de atuação estão voltados a
                        adquirir cada vez mais conhecimento e experiência para
                        que possa crescer profissionalmente.
                    </span>
                    <br />
                    <br />
                    <button
                        type="submit"
                        className="flex items-center justify-center w-1/2 p-2 text-sm border lg:w-1/4 border-secondary rounded-3xl text-texts box"
                    >
                        <h2>Technologies</h2>
                        <i className="ml-2 fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </form>
        );
    }
}

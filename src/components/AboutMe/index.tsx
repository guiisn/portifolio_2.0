import React, { Component } from "react";

import foto from '../../assets/foto.jpeg';

interface IPageState {

};

export default class AboutMe extends Component<any, IPageState> {
    constructor(props: IPageState) {
        super(props);
    };

    render() {
        return (
            <div className='pb-10 pl-10 pr-10 mt-10 border-t border-tertiary font-display bg-primary' id='aboutMe'>
                <form action='#projects'>
                    <div className='grid w-full grid-cols-1 mt-14 md:grid-cols-2 lg:grid-cols-2'>
                        <div className='hidden lg:flex md:flex'>
                            <img src={foto} alt="" className='rounded-full images'/>
                        </div>
                        <div className='text-sm font-semibold md:text-xl text-texts'>
                            <h2>Sou desenvolvedor full stack desde 2019, atuando com as mais atuais e performáticas tecnologias do mercado. Com isso, possuo a capacidade de deixar teu site e/ ou aplicação com uma alta performance, além de um visual bonito e interativo.</h2>
                            <br />
                            <h2>Em 2019, iniciei a Graduação em Ciência da Computação, na UFAL- Universidade Federal de Alagoas.</h2>
                            <br />
                            <h2>Fui bolsista durante 7 meses em um programa de Iniciação Científica- PIBIC, onde fiz parte do laboratório do projeto Falibras. <a className='text-tertiary hover:text-secondary' href='http://www.falibras.org/'>Conheça o Falibras.</a></h2>
                            <br />
                            <h2>Atualmente estou trabalhando como desenvolvedor front end na <a className='text-tertiary hover:text-secondary' href='https://aemsolutions.com.br/'>A&M Solutions.</a></h2>
                        </div>
                    </div>
                    <button type='submit' className='w-full p-4 mt-12 text-2xl border-2 efeito efeito-1 text-texts border-secondary'>
                    <i className="mr-2 fas fa-tasks"></i>My projects
                    </button>
                </form>
            </div>
        );
    };
};
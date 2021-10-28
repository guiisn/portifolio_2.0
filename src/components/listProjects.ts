import poke01 from '../assets/img/01poke.png';
import marvel from '../assets/img/marvel.png';
import estoque from '../assets/img/estoque.png';

import pokeVideo from '../assets/videos/poke.mp4';
import marvelVideo from '../assets/videos/marvel.mp4';
import estoqueVideo from '../assets/videos/estoque.mp4';

export const Poke = [
    {
        nome: 'Poke Api',
        descricao:
            'Um projeto web que consome a api pokeapi.com, e que retorna os dados de 100 pokemons.',
        tags: ['React.js', 'Axios', 'Tailwind css'],
        image: poke01,
        link: 'https://github.com/guiisn/pokeApi',
        video: pokeVideo,
    },
];

export const ControleEstoque = [
    {
        nome: 'Meu Estoque',
        descricao:
            'Um app desenvolvido inicialmente para uma revendedora Natura, com o intuito de facilitar o controle do estoque de seus produtos.',
        tags: ['Node.js', 'ExpressJs', 'MySql', 'React Native'],
        image: estoque,
        link: 'https://github.com/guiisn/pokeApi',
        video: estoqueVideo,
    },
];

export const MarvelApi = [
    {
        nome: 'Marvel Api',
        descricao:
            "Um projeto web capaz de consumir a api oficial da Marvel, e que retorna os Personagens, Séries e Histórias em Quadrinhos da Marvel. Esse projeto foi desenvolvido com o intuito de estudar o framework Next.js, MaterialUI e também com o intuito principal, estudar integração com API's através do Axios.",
        tags: ['Next.js', 'Axios', 'Material UI', 'Typescript'],
        image: marvel,
        link: 'https://github.com/guiisn/pokeApi',
        video: marvelVideo,
    },
];

export const CrudBasico = [
    {
        nome: 'CRUD em Node.js',
        descricao:
            'Uma api rest capaz de realizar todo o CRUD (cadastro, listagem, edição e remoção) de filmes.',
        tags: ['Node.js', 'ExpressJs', 'MySql'],
        image: poke01,
        link: 'https://github.com/guiisn/pokeApi',
        video: pokeVideo,
    },
];

export const arr = [Poke, ControleEstoque, MarvelApi];

/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';

import { techs } from '../listTechs';

interface IPageState {}

export default class Technologies extends Component<any, IPageState> {
    constructor(props: IPageState) {
        super(props);
    }

    render() {
        return (
            <form
                id="techs"
                action="#projects"
                className="flex flex-col items-center h-screen bg-primary"
            >
                <h1 className="text-3xl font-semibold font-display text-texts">
                    Technologies
                </h1>
                <>
                    <div className="grid w-11/12 grid-cols-3 gap-2 lg:w-6/12 ">
                        {techs.map((response: any, index: any) => (
                            <div className="h-40 border-b-4 border-secondary hover:border-tertiary">
                                <div className="flex flex-col items-center justify-between h-full">
                                    <img
                                        className="mt-10"
                                        src={response[0].photo}
                                        alt={response[0].name}
                                    />
                                    <span className="mb-4 text-secondary font-secondary">
                                        {response[0].name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
                <div className="flex justify-end w-11/12 mt-4 lg:w-1/2">
                    <button
                        type="submit"
                        className="flex items-center justify-center w-1/2 p-2 text-sm border lg:w-1/4 border-secondary rounded-3xl text-texts box"
                    >
                        <h2>Projects</h2>
                        <i className="ml-2 fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </form>
        );
    }
}

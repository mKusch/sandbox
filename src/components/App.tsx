import * as React from 'react';

export class App extends React.Component<IAppProps> {
    constructor(props: IAppProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (<div>Hello world!</div>);
    }
}

interface IAppProps {

}
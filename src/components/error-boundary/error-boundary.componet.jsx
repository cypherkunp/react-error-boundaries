import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { error: null, info: null };

    componentErrorLogger = (error, info) => {
        //Error Logger
    };

    static getDerivedStateFromError(error) {
        console.log(`getDerivedStateFromError() is called with error: ${error}`);

        // Update state so the next render will show the fallback UI.
        return { error };
    }

    componentDidCatch(error, info) {
        console.log(`componentDidCatch() is called with error: ${error} and info: ${info}`);

        // good place for logging errors
        this.componentErrorLogger(error, info);
        this.setState({ error, info });
    }

    render() {
        console.log(`render() is called with props: ${this.props} and state: ${this.state}`);

        const { error, info } = this.state;

        if (error) {
            return (
                <div>
                    <h3>Oops, looks like something went wrong...</h3>
                    <details>
                        {error && error.toString()}
                        <br />
                        {info && info.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

import React from 'react';
import logo from '../../asset/logo.svg';
import './App.css';
import ErrorBoundary from './../error-boundary/error-boundary.componet';
import BuggyCounter from './../buggy-counter/buggy-counter.component';

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="app-body">
                <div>
                    <h1>This is an example of Error Boundaries in React 16</h1>
                    <h3>Instructions:</h3>
                    <ul>
                        <li>Click on the numbers to increase the counter</li>
                        <li>The counter is programmed to throw when it reaches 5.</li>
                        <li>This simulates a JS error in a component.</li>
                    </ul>

                    <hr />
                    <ErrorBoundary>
                        <p>
                            These two counters are inside the same error boundary. If one crashes the error boundary
                            will replace both of them.
                        </p>
                        <BuggyCounter />
                        <BuggyCounter />
                    </ErrorBoundary>
                    <hr />
                    <p>
                        These two counters are inside their own error boundary. If one crashes the other is not
                        affected.
                    </p>
                    <ErrorBoundary>
                        <BuggyCounter />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <BuggyCounter />
                    </ErrorBoundary>
                </div>
            </main>
        </div>
    );
}

export default App;

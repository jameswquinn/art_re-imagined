/** @jsx h */
import { cloneElement, createContext, createElement, createRef, toChildArray, isValidElement, h, hydrate, render, Fragment } from "preact";
import { useCallback, useContext, useDebugValue, useEffect, useErrorBoundary, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'preact/hooks';
import { unmountComponentAtNode, unstable_batchedUpdates, createFactory, createPortal, findDOMNode, forwardRef } from 'preact/compat';
import Helmet from "preact-helmet";
import Router, { getCurrentUrl, Link, route, Route } from "preact-router";
//import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import { prefetch } from "webpack";

const UserContext = createContext(null)

{
    handleRoute = e => { this.currentUrl = e.url; };

    <Router onChange={this.handleRoute}>
        <UserContext.Provider>
        <name path='path' />
        <Link to="/">Home</Link>
        <Route></Route>
        </UserContext.Provider>
    </Router>
}

{


}

export const App = props => {

    handleRoute = e => { this.currentUrl = e.url };
    <div id="root">
        <Router onChange={this.handleRoute}>
            <name path='path' />
        </Router>
    </div> 
}

console.log('Hello World from your main file!');
/** @jsx h */
import { h, Component, render, Fragment, createContext, hydrate, toChildArray } from "preact";
import { useRef, useReducer, useMemo, useLayoutEffect, useImperativeHandle, useErrorBoundary, useDebugValue, useContext, useEffect, useCallback, useState } from 'preact/hooks';
import React from "preact/compat";
import Helmet from "preact-helmet";
import { Router } from "preact-router";
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';



import "./skeleton.css"
import "./styles.css"

const NODE = document.body.querySelector("#root");


const Home = () => (
  <Fragment>
    <Helmet
      title="Changing My Title Hay James Yet Another Page"
      meta={[
        { name: "description", content: "Helmet application" },
        { property: "og:type", content: "article" }
      ]}
    />
    { /*
    <h1>hello world</h1>
    */}
    {/*
      <picture>
        <source srcset={require("./images/portrait-photography-old-man.jpg?min=320,max=1280,steps=6&format=webp").srcSet} type='image/webp' />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1088 725'%3E%3C/svg%3E"
          srcset={require("./images/portrait-photography-old-man.jpg?min=320,max=1280,steps=6").srcSet}
          alt=""
          loading="lazy" />
      </picture>
*/}
    {/*
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
        srcset={require("./images/portrait-photography-old-man.jpg?min=320,max=1280,steps=6&format=webp").srcSet}
        width="1088"
        height="725"
        alt=""
        loading="lazy"
      />
      */}
    <figure className="aspectRatioSizer veiwport">
      <picture>
        <source srcset={require("./images/5d5ab57dd382479b5f35745670e9c98b-1.jpg?min=320,max=1024,steps=6&format=webp").srcSet} type='image/webp' media="(orientation: landscape)" />
        <source srcset={require("./images/0539e6324fa2aa8bd260f8c043145352-1.jpg?min=320,max=1024,steps=6&format=webp").srcSet} type='image/webp' media="(orientation: portrait)" />
        <source srcset={require("./images/5d5ab57dd382479b5f35745670e9c98b-1.jpg?min=320,max=1024,steps=6").srcSet} type='image/jpeg' media="(orientation: landscape)" />
        <source srcset={require("./images/0539e6324fa2aa8bd260f8c043145352-1.jpg?min=320,max=1024,steps=6").srcSet} type='image/jepg' media="(orientation: portrait)" />
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          alt=""
          loading="lazy"
        />
      </picture>
      <figcaption>
        <h2>preserveAspectRatio</h2>
        <button>ok</button>
        </figcaption>
    </figure>
    <p>The preserveAspectRatio attribute indicates how an element with a viewBox providing a given aspect ratio must fit into a viewport with a different aspect ratio.

Because the aspect ratio of an SVG image is defined by the viewBox attribute, if this attribute isn't set, the preserveAspectRatio attribute has no effect/</p>
    
    {/*
      <picture className="aspectRatioSizer set_aspect__ratio16x9"> 
        <source srcset={require("./images/portrait-photography-old-man.jpg?min=320,max=1024,steps=6&format=webp").srcSet} type='image/webp' media="(orientation: landscape)" />
        <source srcset={require("./images/Beautiful-Portrait-Photography-by-Tanya-Markova.jpg?min=320,max=1024,steps=6&format=webp").srcSet} type='image/webp' media="(orientation: portrait)" />
        <source srcset={require("./images/portrait-photography-old-man.jpg?min=320,max=1024,steps=6").srcSet} type='image/jpeg' media="(orientation: landscape)" />
        <source srcset={require("./images/Beautiful-Portrait-Photography-by-Tanya-Markova.jpg?min=320,max=1024,steps=6").srcSet} type='image/jepg' media="(orientation: portrait)" />
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          alt=""
          loading="lazy"
        />
      </picture>

      <h1>hello world</h1>
    */}


    {/*<p>This is some text in body...</p>*/}
  </Fragment>
);


const App = () => (
  <div id="root">
    <Helmet
      title="My Title"
      titleTemplate="%s | MyAwesomeWebsite.com"
    />
    <Home />
  </div>
);

render(<App />, document.body, NODE);

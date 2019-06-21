import React from 'react'
import { hydrate } from 'react-dom'
import { App } from '../shared/react'
import { BrowserRouter } from 'react-router-dom'

// entry point for client side react component tree
// hydrate picks up markup from the server render
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

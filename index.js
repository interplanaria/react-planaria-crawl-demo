import { render } from 'react-dom'
import React from 'react'
import App from './App'
import Planaria from '@planaria/react-planaria'
const conf = {
  query: {
    q: {
      find: { 
        "out.o1": "OP_RETURN",
      },
      sort: { "blk.i": -1 },
    },
  },
  project: { "blk": 1, "tx.h": 1, "out.s2": 1 },
  limit: 2e3,
  crawl: true,
}
render(<Planaria {...conf} app={App} />, document.getElementById('entry'))
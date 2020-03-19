import React, { Component } from 'react'
import getAppName from './apps'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
    }
  }
  componentDidMount() {
    this.handlePage(1)
  }
  handlePage(page) {
    if (page === '<<') {
      page = 1
    } else if (page === '>>') {
      page = this.props.txs.length / 20
    }
    const offset = 20 * page
    this.setState(state => {
      state.page = page
      state.data = this.props.txs.slice(offset - 20, offset - 1)
      return state
    })
  }
  content() {
    const txs = this.state.data
    let items = txs
      .map(tx => {
        return tx.out.filter(xput => xput.o1 === 'OP_RETURN').map(xput => { 
          console.log('tx.blk', tx.blk)
          xput.h = tx.tx.h
          xput.blk = tx.blk.i
          return xput
        })
      }) 
      items = items.flat().map(xput => {
        const app = getAppName(xput.s2)
        if (app === 'other') {
          console.log('### app not detected', xput.s2)
        }
        return ({
          s: xput.s2,
          h: xput.h,
          a: app,
          blk: xput.blk
        })
      })
      .map((tx, i) => {
        const color = i % 2  === 0 ? '#dddddd' : 'white'
        return (
          <tr 
            style={{ backgroundColor: color }}
            >
            <td style={styles.cell}>{tx.blk}</td> 
            <td style={styles.cell}>{tx.h}</td>
            <td style={styles.cell}>{tx.s}</td>
            <td style={styles.cell}>{tx.a}</td>
          </tr>
        )
      }) 
    return items
  }
  footer() {
    const idx = this.state.page
    let pages = []
    let left = idx - 4
    if (left <= 0) left = 1
    let right = idx + 4
    if (right > Math.floor(this.props.txs.length / 20)) {
      right = Math.floor(this.props.txs.length / 20) 
    }
    for (let i = left;  i < right; i++) {
      pages.push(i)
    }
    pages.unshift('<<')
    pages.push('>>')
    return pages.map((page, i) => {
      return <button onClick={() => this.handlePage(page)} key={i}>{page}</button>
    })
  }
  render() {
    return (
      <div style={styles.container}>
        <table>
          <thead>
            <tr>
              <td style={styles.cell}>block</td>
              <td style={styles.cell}>hash</td>
              <td style={styles.cell}>id</td>
              <td style={styles.cell}>name</td>
            </tr>
          </thead>
          <tbody>
            {this.content()}
          </tbody>
        </table> 
        <div style={styles.footer}>
          {this.footer()}
        </div>
      </div>
    )
  }
}
const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    width: 400,
    margin: 5,
    justifyContent: 'space-between',
  },
  cell: {
    paddingLeft: 5,
    paddingRight: 5,
    height: 30,
  }
}
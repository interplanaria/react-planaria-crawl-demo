  const getAppName = (s2) => {
    if (s2 === '1LtyME6b5AnMopQrBPLk4FGN8UBuhxKqrn') {
      return 'weathersv'
    }
    if (s2 === '19dbzMDDg4jZ4pvYzLb291nT8uCqDa61zH') {
      return 'preev'
    }
    if (s2 === '1DSXi8hvxn6Pd4TavhmTKxU7BUqS7cnxhw') {
      return 'airqlty'
    }
    if (
      s2 === '1LoveF7qQijpjascPytHor2uSEEjHHH8YB' || 
      s2 === '168qkFkCWCxc6xqG1SCdgxuLDPbhbPoktJ') {
      return 'twetch'
    }
    if (s2 === '19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut') {
      return 'b://'
    }
    if (s2 === '1HyHXtYWyGePrHVisnNdS931Vt6CqouUyZ') {
      return 'relayX'
    }
    if (s2 === 'moneybutton.com') {
      return 'moneybutton'
    }
    if (s2 === 'zzzz') {
      return 'zzzz'
    }
    if (s2 === 'satoplay.com') {
      return 'satoplay.com'
    }
    if (s2 === '1BAESxZMweg2mG4FG2DEZmB1Ury2ruAr9K') {
      return 'baemail'
    }
    if (s2 === '1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5') {
      return 'magic'
    }
    if (s2 === '15PciHG22SNLQJXMoSUaWVi7WSqc7hCfva') {
      return 'author_identity_protocol'
    }
    if (s2 === 'm') {
      return 'loggeru'
    }
    if (s2.substring(0, 12) === 'peergame.com') {
      return 'peergame.com'
    }
    return 'other'
  }

  module.exports = getAppName
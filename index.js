function txoparse(txo) {
  var ret = {}

  // check string exists
  if (!txo) {
    return ret
  }

  // check txo: uri
  if (!txo.match(/txo:/)) {
    return ret
  }

  // get address
  var address = txo.split(':')
  if (!address) {
    return ret
  }

  // get tx and vout
  ret.tx = address[1]
  ret.vout = address[2] || 0

  return ret
}

module.exports = txoparse
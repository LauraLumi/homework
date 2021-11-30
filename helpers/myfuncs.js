function convertDate(strDate) {
    let parts = strDate.split('/')
    if ((parts[1]).length === 1 && (parts[0]).length === 1) {
      return '0' + parts[1] + '.' + '0' + parts[0] + '.' + parts[2]
    } else if ((parts[0]).length === 1 ) {
      return parts[1] + '.' + '0' + parts[0] + '.' + parts[2]
    } else if ((parts[1]).length === 1) {
      return '0' + parts[1] + '.' + parts[0] + '.' + parts[2]
    } else {
    return parts[1] + '.' + parts[0] + '.' + parts[2]
    }
}

function mergeName(fname, lname) {
    let f = fname.substring(0,1)
    return f + '. ' + lname
}

function getEmail(fname, lname, company) {
  let compName = company.split(' ')
  if (company.length != 0) {
    return fname + '.' + lname + '@' + compName[0]+ '.com'
  } else {
    return 'no company - no e-mail'
  }
}

function hexUpper(hex) {
  let hexup = hex.toUpperCase()
  return hexup
}

function showDetails(fname, company, color) {
  if (fname.length > 0 && company.length > 0 && color.length > 0){
    return 'Open '
  } else {
    return 'Cannot open '
  }
}

module.exports = {
    convertDate: convertDate,
    mergeName: mergeName,
    getEmail: getEmail,
    hexUpper: hexUpper,
    showDetails: showDetails
}


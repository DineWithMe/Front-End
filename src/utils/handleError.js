const handleError = (error) => {
  let err = {}
  try {
    err = JSON.parse(error.message.split('GraphQL error: ')[1])
  } catch (errs) {
    err.statusCode = 0
    err.message = error.message
  }

  // eslint-disable-next-line no-console
  !process.browser && console.log(err)
  return {
    statusCode: err.statusCode,
    message: `${err.statusCode}: ${err.message}`,
  }
}

export default handleError

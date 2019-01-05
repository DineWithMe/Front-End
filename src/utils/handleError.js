const handleError = (error) => {
  let err = {}
  try {
    err = JSON.parse(error.message.split('GraphQL error: ')[1])
  } catch (errs) {
    err.statusCode = 0
    err.message = error.message
  }
  return {
    statusCode: err.statusCode,
    message: `${err.statusCode}: ${err.message}`,
  }
}

export default handleError

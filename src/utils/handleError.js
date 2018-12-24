const handleError = (error) => {
  const err = JSON.parse(error.message.split('GraphQL error: ')[1])
  return {
    statusCode: err.statusCode,
    message: `${err.statusCode}: ${err.message}`,
  }
}

export default handleError

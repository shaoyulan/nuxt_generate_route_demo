export default (req, res, next) => {
  console.log('req', req.url)
  next()
}
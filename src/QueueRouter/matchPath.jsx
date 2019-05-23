import pathToRegexp from 'path-to-regexp'

const compilePath = (path, options) => {
  const keys = []
  const regexp = pathToRegexp(path, keys, options)

  return { regexp, keys }
}

const matchPath = (pathname, options = {}) => {
  if (typeof options === 'string') {
    options = { path: options }
  }

  const { path, exact = true, strict = false, sensitive = false } = options
  const paths = [].concat(path)

  return paths.reduce((matched, path) => {
    if (!path) return null
    if (matched) return matched

    const { regexp, keys } = compilePath(path, {
      end: exact,
      strict,
      sensitive,
    })

    const match = regexp.exec(pathname)
    if (!match) return null

    const [url, ...values] = match
    const isExact = pathname === url
    if (exact && !isExact) return null

    return {
      path, // the path used to match
      url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
      isExact, // whether or not we matched exactly
      params: keys.reduce((memo, key, index) => {
        memo[key.name] = values[index]
        return memo
      }, {}),
    }
  }, null)
}

export default matchPath

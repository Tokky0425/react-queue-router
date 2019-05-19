import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

export default history
export const historyStore = {
  store: [],
  latest: null,
}

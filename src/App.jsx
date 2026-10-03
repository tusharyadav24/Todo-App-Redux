
import { Provider } from 'react-redux'
import { store } from './app/store'
import Todo from './components/todo'

function App() {
  return (
  <>
  <Provider store={store}>
  <Todo/>
  </Provider>
  </>
  )
}

export default App

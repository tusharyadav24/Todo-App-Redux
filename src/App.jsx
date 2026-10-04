import { Provider } from 'react-redux';
import { store } from './app/store';
import Todo from './components/todo';

export default function App() {
  return (
    <Provider store={store}>
      <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center py-5">
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="card shadow-lg border-0 rounded-4 p-4 bg-white">
            <Todo />
          </div>
        </div>
      </div>
    </Provider>
  );
}
import { Provider } from "react-redux";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.min.css"

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="mt-3 mb-3">Apresentação</h1>
        <aside class="menu-sidebar d-none d-lg-block">
          <div class="logo">
            <a href="#">
              Home
            </a>
          </div>
          <div class="menu-sidebar-content js-scrollbar1">
            <nav class="navbar-sidebar">
              <ul class="list-unstyled navbar-list">
                <li>
                  <a href="#">Apresentação</a>
                </li>
                <li>
                  <a href="#">Serviços</a>
                </li>
                <li>
                  <a href="#">Central do Cliente</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

      </div>
    </Provider>
  )
}

export default App;

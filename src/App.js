import { Routes, Route } from "react-router-dom";
import { Home, Login } from './containers/public';
import { path } from './utils/constant'

function App() {
  return (
    <div className="h-screem w-screen bg-primary">

      <Routes>
        <Route path={path.HOME} element={Home} />
        <Route path={path.HOME} element={Login} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import "aos/dist/aos.css";

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Main from './views/Main';
import Contact from './views/Contact';
import Root from './components/Root';

import Merch from './views/Merch';
import Catering from './views/Catering';
import Menu from './views/Menu';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" element={<Main />} />
            <Route path="contact" element={<Contact />} />
            <Route path="menu" element={<Menu />} />
            <Route path="merch" element={<Merch />} />
            <Route path="catering" element={<Catering />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;

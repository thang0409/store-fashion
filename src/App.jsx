import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import router from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBar';
import SideBar from '@/components/SideBar/SideBar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SideBarProvider>
                    <Router>
                        <SideBar />
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                {router.map((item, index) => (
                                    <Route
                                        key={index}
                                        path={item.path}
                                        element={<item.components />}
                                    />
                                ))}
                            </Routes>
                        </Suspense>
                    </Router>
                </SideBarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;

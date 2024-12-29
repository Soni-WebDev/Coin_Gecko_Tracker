import { Route, Routes } from "react-router-dom";
import MainLayout from "../../pages/Layout";
import { lazy, Suspense } from "react";
import { Facebook } from "react-content-loader";
import MyLoader from "../PageLoader/PageLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import('../../pages/Home'));

const CoinDetailsPage = lazy(() => import('../../pages/CoinDetailsPage'));
function Routing() {
    return (
        <>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coinDetails/:coinId" element={<CoinDetailsPage />} />
            </Routes> */}
            <CustomErrorBoundary>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={
                            // <Suspense fallback={<div>Loading Home...</div>}>
                            <Suspense fallback={<Facebook />}>
                                <Home />
                            </Suspense>
                        } />
                        <Route path="/coinDetails/:coinId" element={
                            <Suspense fallback={<MyLoader />}>
                                <CoinDetailsPage />
                            </Suspense>

                        } />
                    </Route>
                </Routes>
            </CustomErrorBoundary>
        </>
    )
}

export default Routing;
import { AnimatePresence } from "framer-motion";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { AuthProvider } from "../context/AuthContext";
import CatsPage from "../pages/CatsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import ProtectedPage from "../pages/ProtectedPage";
import { RequireAuth } from "./RequireAuth";

const SecondPage = lazy(() => import("../pages/SecondPage"));

export function AppRoutes() {
    return (
        <AuthProvider>
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route
                            path="segunda-pagina"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <SecondPage />
                                </React.Suspense>
                            }
                        />
                        <Route path="consumindo-api" element={<CatsPage />} />
                        <Route path="produtos/:productId" element={<ProductsPage />} />
                        <Route path="pagina-protegida" element={<RequireAuth><ProtectedPage /></RequireAuth>} />
                    </Route>


                    {/* Precisa ser a última rota do router */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AnimatePresence>
        </AuthProvider>
    );
}
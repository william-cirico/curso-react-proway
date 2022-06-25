import { Route, Routes } from "react-router-dom";
import App from "../App";
import { AuthProvider } from "../contexts/AuthContext";
import { Class01ContentPage } from "../pages/Class01ContentPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RequireAuth } from "./RequireAuth";
import { AnimatePresence } from "framer-motion";
import { NotFoundPage } from "../pages/NotFoundPage";
import React, { lazy } from "react";

const Class01ExercisesPage = lazy(() => import("../pages/Class01ExercisesPage"));

export function AppRoutes() {
    return (
        <AuthProvider>
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="login" element={<LoginPage />} />
                        <Route index element={<RequireAuth><HomePage /></RequireAuth>} />
                        <Route path="aulas">
                            <Route path="1/conteudos" element={<RequireAuth><Class01ContentPage /></RequireAuth>} />
                            <Route path="1/exercicios" element={
                                <RequireAuth>
                                    <React.Suspense fallback={<>...</>}>
                                        <Class01ExercisesPage />
                                    </React.Suspense>
                                </RequireAuth>}
                            />
                            <Route path="2/conteudos" />
                            <Route path="2/exercicios" />
                            <Route path="3/conteudos" />
                            <Route path="3/exercicios" />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes >
            </AnimatePresence>
        </AuthProvider>
    );
}
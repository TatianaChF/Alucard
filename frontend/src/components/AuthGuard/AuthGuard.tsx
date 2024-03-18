import { useAuth } from "react-oidc-context";
import React from "react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const auth = useAuth();

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Вход в систему ...</div>;
        case "signoutRedirect":
            return <div>Выход из системы ...</div>;
    }

    if (auth.isLoading) {
        return <div>Загрузка авторизации...</div>;
    }

    if (auth.error) {
        return <div>Ой, ошибочка вышла: {auth.error.message}</div>;
    }

    if (!auth.isAuthenticated) {
        return <div>Пожалуйста, зарегистрируйтесь</div>;
    } else {
        return <>{children}</>;
    }
};
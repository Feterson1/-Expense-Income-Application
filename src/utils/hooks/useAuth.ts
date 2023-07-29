import { useAppSelector } from "./hooks"

export const useAuth = (): boolean => {
    const isAuth = useAppSelector((state) => state.user.isAuth);

    return isAuth;

}
import { useDispatch } from "react-redux";
import { GetMe, Login, Register } from "../service/auth.api";
import { setIsLoading, setUser } from "../state/authSlice";
import { useForm } from "react-hook-form";


export const useAuth = () => {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
      } = useForm();

    async function handleRegister({ email, password, fullName }) {

        const data = await Register({ email, password, fullName })

        dispatch(setUser(data.user))

        return data.user
    }

    async function handleLogin({ email, password }) {

        const data = await Login({ email, password })
        dispatch(setUser(data.user))
        return data.user
    }

    async function handleGetMe() {
        try {
            dispatch(setIsLoading(true))
            const data = await GetMe()
            dispatch(setUser(data.user))
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(setIsLoading(false))
        }
    }

    return { handleRegister, handleLogin, handleGetMe, register,
        handleSubmit,
        setError,
        clearErrors, errors, isSubmitting }

}
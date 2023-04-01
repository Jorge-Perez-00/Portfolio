import { useNavigate } from "react-router-dom";


export const withRouter = (Component) => {
    const Wrapper = () => {
        const navigate = useNavigate();

        return (
            <Component
                navigate={navigate}
            />
        )
    }
    return Wrapper;
}
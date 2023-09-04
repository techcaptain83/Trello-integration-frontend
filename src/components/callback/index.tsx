import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import withAuth from "../../hoc/with-auth-redirect";

const Callback: React.FC = () => {
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useLocalStorage("access_token", "");
    let [searchParams] = useSearchParams();
    const handleCallback = async () => {
        try {
            const params = new URLSearchParams(window.location.hash.substr(1));
            const token = params.get('token');
            if (token?.length) {
                setAccessToken(token);
                navigate("/")
            }
        } catch (error) {
        }
    };

    useEffect(() => {
        handleCallback();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl">Authenticating..</h1>
        </div>
    );
};

export default withAuth(Callback);

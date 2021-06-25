import * as React from "react";
import { useSelector } from "react-redux";
import AuthButtons from "../../components/Buttons/AuthButtons";
import LoggedButtons from "../../components/Buttons/LoggedButtons";

export default function UserButton() {
    const { isLogin } = useSelector((store) => store.userAuth);

    return (
        <div>
            {isLogin ? (
                <LoggedButtons />
            ) : (
                <AuthButtons />
            )}
        </div>
    );
}
    

import { Outlet } from "react-router-dom";
import NavBer from "../Components/LayOuts/NavBer";

const Root = () => {

    return (
        <div>
            <div className="max-w-[80%] mx-auto">
                <NavBer></NavBer>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
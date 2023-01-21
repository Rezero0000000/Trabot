import React, {Fragment} from "react";

const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <div className="flex xs:font-medium ">
                    <img src="/icons/boat.svg" alt="" className="w-[1.7rem]"/>
                    <h4 className="ml-2 mt-2  text-[#0E3344] xs:text-white text-sm">Terabot</h4>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav className="absolute w-full top-0 h-14 bg-background border-b border-border">
            <div className="px-4 py-1 flex flex-row justify-around place-items-center">
                <div className="text-xl">Easy Local Cloud</div>
            </div>
        </nav>
    );
};

export default NavBar;
import { Children } from "react";

export const PryButton = ({ name, onClick ,width, children}) => {
    return (
        <div className="py-8 text-center">
            <button
                onClick={onClick}
                type="button"
                style={{width: width === "full" ? '100%': "auto"}}
                className="inline-flex justify-center rounded bg-cyan-600 px-8 py-4 text-center text-xl font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
            >
                {children}
            </button>
        </div>
    );
};

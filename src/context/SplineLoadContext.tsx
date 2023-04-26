import { createContext, useState } from "react";

type SplineLoadContextType = {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
};

type WithChildrenProps = {
    children: React.ReactNode;
};

export const SplineLoadContext = createContext<SplineLoadContextType>({
    isLoading: true,
    setIsLoading: () => {}
});

export const SplineLoadProvider = ({children}: WithChildrenProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <SplineLoadContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </SplineLoadContext.Provider>
    )
}
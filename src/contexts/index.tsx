import { ReactNode } from "react"
import { ThemeProvider } from "./ThemeContext";

interface ProviderProp {
    children: ReactNode;
}

const Providers = ({ children }: ProviderProp) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Providers;
import React from "react";
export declare class IconErrorBoundary extends React.Component<any, {
    hasError: boolean;
}> {
    constructor(props: any);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    render(): React.ReactNode;
}

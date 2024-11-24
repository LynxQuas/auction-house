import React from "react";

const NavigationLayout = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    return <div className={className}>{children}</div>;
};

export default NavigationLayout;

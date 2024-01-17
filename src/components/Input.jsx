import React, { useEffect, useRef } from "react";

const Input = ({
    type = "text",
    placeholder = "",
    className,
    shouldFocus = false,
    ...props
}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (shouldFocus) inputRef.current.focus();
    }, [shouldFocus]);

    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            {...props}
            ref={inputRef}
        />
    );
};

export default Input;

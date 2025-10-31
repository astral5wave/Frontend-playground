import React from "react";
export function useOutsideClick(ref, handleClose) {
    const handleClick=(event)=>{
        if(ref.current?.contains(event.target)){
            return;
        }
        handleClose();
    }
    React.useEffect(() => {
        window.addEventListener("mousedown", handleClick);
        return () => window.removeEventListener("mousedown", handleClick)
    }, [ref,handleClose]);
}
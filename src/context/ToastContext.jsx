import React, { createContext, useState, useContext, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'error') => {
        const newToast = { id: uuidv4(), message, type };
        setToasts((prevToasts) => [...prevToasts, newToast]);

        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
        }, 5000);
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}

            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`toast show`}
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        data-bs-autohide="true"
                        data-bs-delay="5000"
                    >
                        <div className="toast-header">
                            <strong className={`me-auto ${toast.type === 'error' ? 'text-danger' : 'text-success'}`}>
                                {toast.type === 'error' ? 'Error' : 'Success'}
                            </strong>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                                onClick={() => {
                                    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
                                }}
                            ></button>
                        </div>
                        <div className="toast-body">{toast.message}</div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

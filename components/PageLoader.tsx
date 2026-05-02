"use client";

import { useEffect, useState } from "react";

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200); //  1.2 sec

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return <>{children}</>;
}
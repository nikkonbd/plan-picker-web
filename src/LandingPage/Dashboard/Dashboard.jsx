import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { Helmet } from "react-helmet-async";

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Helmet>
                <title>Dashboard || PlanPicker</title>
            </Helmet>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <main>
                        <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
                            <Outlet />
                        </div>
                    </main>

                    {/* <Banner /> */}
                </div>
            </div>
        </>

    );
}

export default Dashboard;


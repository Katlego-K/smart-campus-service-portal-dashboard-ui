const Announcements = () => {
    return <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-lamaSkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2>Software Engineering Project</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2025-05-12
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        The IBM session with ICT students has been postponed to the 21st of May 2025
                    </p>
                </div>
                <div className="bg-lamaPurpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2>Data Structures and Algorithms revision on</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2025-05-13
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        The IBM session with ICT students has been postponed to the 21st of May 2025
                    </p>
                </div>
                <div className="bg-lamaYellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2>Human Computer Interaction Sick Test on </h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2025-05-16
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        The IBM session with ICT students has been postponed to the 21st of May 2025
                    </p>
                </div>
            </div>            
        </div>;
};

export default Announcements
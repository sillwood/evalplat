import { useNavigate } from 'react-router-dom';
import { Logout } from './Logout';

export const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate('/dashboard');
    };

    return (
        <nav className="bg-primary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div
                            className="flex-shrink-0 hover:cursor-pointer"
                            onClick={handleClick}
                        >
                            <h1 className="text-lg	 font-bold text-white">
                                EvalPlat
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <div
                                    onClick={handleClick}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:cursor-pointer hover:bg-green-700 hover:text-white"
                                >
                                    Dashboard
                                </div>

                                <div className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-green-700 hover:text-white">
                                    <Logout />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        <div
                            className="block rounded-md px-3 py-2 text-base
                            font-medium text-gray-300 hover:bg-green-700
                            hover:text-white"
                            aria-current="page"
                        >
                            <Logout />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

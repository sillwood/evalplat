type FormState = {
    email: string;
    password: string;
};

interface Props {
    isSigningUp: boolean;
    formState: FormState;
    handleTabChange: () => void;
    handleChange: () => void;
    handleSubmit: () => void;
}

export const UserForm = ({
    isSigningUp,
    formState,
    handleTabChange,
    handleChange,
    handleSubmit
}: Props) => {
    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
                            alt="Sillwood Technologies"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            {isSigningUp
                                ? 'Register for your account'
                                : 'Login to your account'}
                        </h2>
                        <div className="mt-2 text-center text-sm text-gray-600 hover:cursor-pointer">
                            <p
                                onClick={handleTabChange}
                                className="font-medium text-sky-400 hover:text-sky-300"
                            >
                                {isSigningUp
                                    ? 'Already registered? Login here.'
                                    : 'New user? Register here.'}
                            </p>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-6"
                        action="#"
                        method="POST"
                    >
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                                    placeholder="Email address"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                                    placeholder="Password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white  hover:bg-green-700  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="h-5 w-5 text-green-500 group-hover:text-green-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                {isSigningUp ? 'Register' : 'Login'}{' '}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

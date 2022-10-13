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
    handleSubmit,
}: Props) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>
                    {isSigningUp ? 'Register' : 'Login'}
                </button>
            </form>
            <p onClick={handleTabChange}>
                {isSigningUp
                    ? 'Already registered? Login here.'
                    : 'New user? Register here.'}
            </p>
        </div>
    );
};

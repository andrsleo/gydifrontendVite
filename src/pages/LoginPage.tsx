import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";

interface LoginFormValues {
    email: string;
    password: string;
}

export default function LoginPage() {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

    const onSubmit = async (data: LoginFormValues) => {
        setLoading(true);
        const success = await login(data.email, data.password);
        setLoading(false);
        if (!success) {
            alert("❌ Email o contraseña incorrectos");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    Iniciar sesión
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "El email es requerido" })}
                            className="mt-1 w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            placeholder="ejemplo@correo.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: "La contraseña es requerida" })}
                            className="mt-1 w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            placeholder="********"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Cargando..." : "Ingresar"}
                    </button>
                </form>
            </div>
        </div>
    );
}

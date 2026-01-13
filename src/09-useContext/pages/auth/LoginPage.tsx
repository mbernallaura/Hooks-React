import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"


export const LoginPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold">Iniciar Sesion</h1>
            <hr />
            <form action="" className="flex flex-col gap-2 my-10">
                <Input type="number" placeholder="ID del usuario"/>
                <button type="submit">Login</button>
            </form>
            <Link to="/about">
                <Button variant="ghost">Volver a la pagina principal</Button>
            </Link>
        </div>
    )
}

import { useRouter } from "next/navigation"

export default function NovoCarro() {
    const router = useRouter()

    function enviar() {
        router.push('/lugares/todos');
    }

    return (
        <div>
            <label>Nome:</label>
            <input type="text"></input>
        </div>
    )
}
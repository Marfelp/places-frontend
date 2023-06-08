import Link from "next/link";

export default async function Home() {
    const response = await fetch('https://api.github.com/users/lbrunofidelis')
    const user = await response.json();

    return (
        <div>
            <h1>Home page</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <Link href="/novo-lugar">Criar carro</Link><br />
            <Link href="/listar-lugares">Listar carros</Link>
        </div>
    )
}
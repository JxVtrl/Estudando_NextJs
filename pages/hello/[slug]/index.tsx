import { useRouter } from "next/router";

const HelloRouter = () => { // Componente de roteamento do componente Hello
    const router = useRouter();
    const { slug } = router.query;


    return (
        <div>
            <h1>Você está em uma rota dinâmica</h1>
            <h1>/hello/{slug}</h1>
        </div>
    )
}

export default HelloRouter;
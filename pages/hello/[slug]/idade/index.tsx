import { useRouter } from "next/router";

const Idade = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>{slug} tem 22 anos</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            doloremque, quidem, quisquam doloremque.
        </p>
        </div>
    );
}
    
export default Idade;
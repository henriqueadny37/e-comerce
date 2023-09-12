import {useRouter} from 'next/router'

const bikeDrop = () => {

const router = useRouter()


    return (
        <button onClick={() => router.back()} className='bg-blue-700 w-32' >
            voltar
        </button>
    )
}

export default bikeDrop
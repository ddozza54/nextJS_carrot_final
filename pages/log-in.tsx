import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function LogIn() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => { console.log(data) }
    return (
        <div>
            <h4>Login</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("userId", { required: true })} placeholder='전화번호, 사용자 이름 또는 이메일' />
                <input {...register("password", { required: true })} placeholder='비밀번호' />
                <button>로그인</button>
            </form>
            <div>
                <span>계정이 없으신가요?</span>
                <Link href='/create-account'>가입하기</Link>
            </div>
        </div>
    );
}


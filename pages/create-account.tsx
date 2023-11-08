import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function CreateAccount() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => { console.log(data) }
    return (
        <div>
            <h4>Create Account</h4>
            <span>친구들의 사진과 글을 보려면 가입하세요.</span>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("userContact", { required: true })} placeholder='휴대폰 번호 또는 이메일 주소' />
                <input {...register("name", { required: true })} placeholder='성명' />
                <input {...register("userName", { required: true })} placeholder='사용자 이름' />
                <input {...register("password", { required: true })} placeholder='비밀번호' />
                <button>가입</button>
            </form>
            <span>가입하면 DDoing의 약관, 데이터 정책 및 쿠키 정택에 동의하게 됩니다. </span>
            <div>
                <span>계정이 있으신가요?</span>
                <Link href='/log-in'>로그인 하기</Link>
            </div>
        </div>);
}


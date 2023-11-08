import React from 'react';

export default function CreateAccount() {
    return (
        <div>
            <h4>Create Account</h4>
            <span>친구들의 사진과 글을 보려면 가입하세요.</span>
            <form>
                <input placeholder='휴대폰 번호 또는 이메일 주소' />
                <input placeholder='성명' />
                <input placeholder='사용자 이름' />
                <input placeholder='비밀번호' />
                <button>가입</button>
            </form>
            <span>가입하면 DDoing의 약관, 데이터 정책 및 쿠키 정택에 동의하게 됩니다. </span>
        </div>);
}


import { $ } from '@utils/common'
import { signup } from '@utils/api'
import loginView from '@views/auth/loginView'

const $app = $('#app');

class SignupView {
    constructor(){}

    onEvent = () => {
        $('.submit').addEventListener('click', this.onSubmit)
        $('.cancel').addEventListener('click', this.onCancel)
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const $form = e.target.closest('.signupForm');
        const payload = {
            userid: $form.userid.value,
            password: $form.password.value,
            name: $form.name.value
        }
        try{
            await signup(payload)
            alert('회원가입 되었습니다.')
            loginView.render();
        }catch{
            alert('회원가입 실패')
            loginView.render();
        }
    }

    onCancel = (e) => {
        loginView.render();
        
    }
    render =() => {
        $app.innerHTML = `<form class="signupForm form">
                            <div class="formTitle">회원가입</div>
                            <table>
                                <tr>
                                    <td><input class="input" type="email" placeholder="아이디" name="userid" required="required" /></td>
                                </tr>
                                <tr>
                                    <td><input class="input" type="password" placeholder="비밀번호" name="password" required="required" /></td>
                                </tr>
                                <tr>
                                    <td><input class="input" type="text" placeholder="이름" name="name" required="required" /></td>
                                </tr>
                                <tr>
                                    <td><input class="submit" type="submit" value="회원가입" /></td>
                                </tr>
                                <tr>
                                    <td><input class="cancel" type="cancel" value="취소" /></td>
                                </tr>
                            </table>
                        </form>`
        this.onEvent();
    }
}

export default new SignupView();
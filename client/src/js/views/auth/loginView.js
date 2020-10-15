import authModel from '@models/authModel'
import signupView from '@views/auth/signupView'

import { $ } from '@utils/common'
import { login } from '@utils/api'

const $app = $('#app');
class LoginView {
    constructor(){}

    onEvent = () => {
        $('.submit').addEventListener('click', this.onSubmit)
        $('.signUpLink').addEventListener('click', this.onSignUp)
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const $form = e.target.closest('.loginForm');
        const payload = {
            userid: $form.userid.value,
            password: $form.password.value
        }

        try {
            const res = await login(payload);
            authModel.setToken(res.token);
            console.log(res);
        } catch {
            this.render();
        }
    }

    onSignUp = (e) => {
        signupView.render()
    }

    render = () => {
        $app.innerHTML = `<form class="loginForm form">
                    <div class="formTitle">로그인</div>
                    <table>
                        <tr>
                            <td><input class="input" type="text" placeholder="아이디" name="userid" required="required" /></td>
                        </tr>
                        <tr>
                            <td><input class="input" type="password" placeholder="비밀번호" name="password" required="required" /></td>
                        </tr>
                        <tr>
                            <td><input class="submit" type="submit" value="로그인" /></td>
                        </tr>
                        <tr>
                            <td><span>아직 회원이 아니세요? <span class="signUpLink"> 회원가입</span></span></td>
                        </tr>
                    </table>
                </form>`
        this.onEvent();
    }
}

export default new LoginView();
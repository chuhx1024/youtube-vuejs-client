<template>
    <div class="gspRov">
        <h2>Login to your account</h2>
        <form @submit.prevent="handleSubmit">
            <ul v-if="errors" class="errors">
                <li v-for="(error, index) in errors" :key="index">
                    {{ `${error.field} ${error.message}` }}
                </li>
            </ul>
            <input v-model="user.email" type="email" placeholder="email" />
            <input v-model="user.password" type="password" placeholder="password" />
            <div class="action input-group">
                <span class="pointer">Signup instead</span>
                <button :disabled="isLoading">Login</button>
                {{isLoading}}
            </div>
        </form>
    </div>
</template>

<script lang="ts">

import { defineComponent, reactive, ref } from 'vue'
import { login } from '@/api/user'

const useLogin = () => {
    const errors = ref([])
    const isLoading = ref(false)
    const user = reactive({
        email: '666@163.com',
        password: '123',
    })
    const handleSubmit = async () => {
        isLoading.value = true
        const { data } = await login(user)
        console.log(data)
    }
    return {
        user,
        errors,
        isLoading,
        handleSubmit,
    }
}

export default defineComponent({
    name: 'LoginIndex',
    setup () {
        return {
            ...useLogin(),
        }
    },
})
</script>

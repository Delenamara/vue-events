<template>
    <header class="header">
        <div class="header-logo">
            <router-link to="/">билеты и абонименты</router-link>
        </div>
        <div class="header-links">
            <div v-for="(item, index) in links" :key="index">
                {{item.name}}
            </div>
        </div>
        <div class="header-login">
            <router-link to="/" @click="login">Войти</router-link>
        </div>
        <div class="header-menu">
            <a href="#"></a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                links: [
                    {
                        name: 'Как купить?',
                        href: '#',
                    },
                    {
                        name: 'Правила',
                        href: '#',
                    },
                    {
                        name: 'Возврат билетов',
                        href: '#',
                    },
                ]
            }
        },
        methods: {
            login() {
                alert('click to login');
            },
        },
    }
</script>

<style lang="scss" scoped>
.header {
    padding: 1rem 2rem;
    font-size: 1.25rem;
}
</style>
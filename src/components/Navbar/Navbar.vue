<template>
    <nav class="nav">
        <div class="nav__item container">
            <ul class="nav__item_links" :class="{ active: burgerMenu }" @click="burgerMenu = false">

                <li v-for="link in links" :key="link.title">
                    <router-link :to="link.url" class="nav__item_links-link">{{ link.title }}</router-link>
                </li>

            </ul>

            <button class="nav__item_menu" @click="burgerMenu = !burgerMenu">
                <img src="@/assets/images/menu.svg" alt="">
            </button>
            

        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
    { title: 'Bio', url: '/bio' },
    { title: 'Projects', url: '/projects' },
    { title: 'Contacts', url: '/cont' },
])

let burgerMenu = ref(false)
</script>

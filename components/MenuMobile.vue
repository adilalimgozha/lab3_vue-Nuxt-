<script setup>
import MenuCardMobile from './MenuCardMobile.vue';

    const props = defineProps({
        menuBarClose: Function,
        toAdventure: Function,
        toNature: Function,
        toFashion: Function,
        toModern: Function,
        toEducation: Function,
        onlyAdventure: Function,
        onlyNature: Function,
        onlyFashion: Function,
        onlyModern: Function,
        onlyEducation: Function,
    })

</script>

<template>

    <div class="menu">
        <div class="nav-contacts">
            <div class="nav">
                <button @click="toAdventure(), menuBarClose(), onlyAdventure()" class="button adv-btn"><MenuCardMobile :name="`Adventure Blog`"></MenuCardMobile></button>
                <button @click="toNature(), menuBarClose(), onlyNature()" class="button nat-btn"><MenuCardMobile :name="`Nature Blog`"></MenuCardMobile></button>
                <button @click="toFashion(), menuBarClose(), onlyFashion()" class="button fas-btn"><MenuCardMobile :name="`Fashion Blog`"></MenuCardMobile></button>
                <button @click="toModern(), menuBarClose(), onlyModern()" class="button mod-btn"><MenuCardMobile :name="`Modern Blog`"></MenuCardMobile></button>
                <button @click="toEducation(), menuBarClose(), onlyEducation()" class="button edu-btn"><MenuCardMobile :name="`Education Blog`"></MenuCardMobile></button>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .button{
        display: block;
        font-size: 2em;
        margin: 1em;
        width:7em;
        height:7em;
    }
    
    .adv-btn{
        background: #B0D17C;

        border: none;
        color: white;
        cursor: pointer;
    }

    .nat-btn{
        background: #B0D17C;

        border: none;
        color: white;
        cursor: pointer;
    }

    .fas-btn{
        background: #B0D17C;

        border: none;
        color: white;
        cursor: pointer;
    }

    .mod-btn{
        background: #B0D17C;

        border: none;
        color: white;
        cursor: pointer;
    }

    .edu-btn{
        background: #B0D17C;

        border: none;
        color: white;
        cursor: pointer;
    }

    .menu{
        position: absolute;
        display: grid;
        grid-template-columns: auto;
        background: #C1EBF1;
        width: 100%;
        height: 50em
    }

    .nav{
        display: grid;
        grid-template-columns: auto auto;
        gap: 1em;
        margin-top: 1em;
        margin-bottom: 4em;
    }

    .nav-contacts{
        background: white;
        margin: 1em;
    }

    .contacts{
        background: linear-gradient(180deg, #AFF090 0%, #45C330 100%);
        border-radius: 10px;
        margin: 1em;
        text-align: center;
        color: white;
    }

    .contacts-word{
        font-size: 2em;
        margin-bottom: 0.5em;
    }

    .contacts-all{
        text-align: left;
        font-size: 1.4em;
    }

    .phone{
        margin: 1em 0.5em
    }

    .adress{
        margin: 1em 0.5em
    }

    .email{
        margin: 1em 0.5em
    }

@media (max-width: 768px) {
  .menu-bar {
    width: 100%;
  }
  .menu-btn {
    font-size: 1.5em;
  }
}

</style>
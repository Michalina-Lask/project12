import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const store = createStore({
    state(){
        return {
            counter:0
        };
    },
    mutations:{
        addOne(state){
            state.counter = state.counter +3
        }
    },
    actions:{
        increment(context){
            setTimeout(function(){
            context.commit('increment')
            },2000)
        },
        increase(context, payload){
            context.commit('increase', payload)
        }
    },
    getters:{
        finalCounter(state){
            return state.counter * 2
        },
        normalizedCounter (state){
            const finalCounter = state.counter * 2;
            if (finalCounter <0) {
                return 0;
            } if (finalCounter > 20){
                return 100
            }
            return finalCounter;
        }


    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');

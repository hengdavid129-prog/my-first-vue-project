import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
    // state() {
    //     return {
    //         name: '',
    //         spots: 0,
    //         members: []
    //     }
    // },

    // if you are reading documentation or tutorials, you might instead see them declare it with an arrow function.
    // The reason why they do this is it provides some better TypeScript support.
    // well just remember a sigle line arrow function that needs to return an object. you must wrap that within parentheses and that should do the trick.
    // this is a vary common approach for declaring your state.
    state: () => ({
        name: '',
        spots: 0,
        members: []
    }),

    // actions: {
    //    // commin convention init(), some people call it handle(), fill(), seed()
    //    fill() {
    //         // here is where we can do really whatever we want to fill the initial state.
    //         // it could be an Ajax call, or it could be a simple import of our team.json file.
    //         import('@/team.json').then(r => {
    //             // let data = r.default;

    //             // this.name = data.name;
    //             // this.spots = data.spots;
    //             // this.members = data.members;

    //             // another option would be to use the patch meethod.
    //             // this.$patch({
    //             //     name: data.name,
    //             //     spots: data.spots,
    //             //     members: data.members
    //             // });

    //             // another option in this case would be to replace the state entirely.
    //             this.$state = r.default;
    //         });
    //    }
    // }

    // in fact, your actions can be asynchronous if they need to.
    actions: {
        async fill() {
            let r = await import('@/team.json');

            this.$state = r.default;
        },

        grow(spots) {
            this.spots = spots;
        }
    },

    // pinia getters is just like vue compited
    getters: {
        spotsRemaining() {
            return this.spots - this.members.length;
        }
    }
});
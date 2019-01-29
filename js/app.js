let vm = new Vue({
    el: '#app',
    data: {
        firstname: 'Jean',
        lastname: 'Delatour'
    },

    computed: {
        fullname: {
            get: function () {
                console.log('cls called')
                return this.firstname + ' ' + this.lastname
            },

            set: function (value) {
                let parts = value.split(' ')
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        }
    }
})
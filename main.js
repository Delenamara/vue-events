new Vue({
    el: "#app",
    data: {
        currentView: 'hexagon1'
    },
    components: {
        hexagon1: {
            template: '#hexagon-template-1'
        },
        hexagon2: {
            template: '#hexagon-template-2'
        },
        hexagon3: {
            template: '#hexagon-template-3'
        },
        hexagon4: {
            template: '#hexagon-template-4'
        },
        hexagon5: {
            template: '#hexagon-template-5'
        }
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    }
})
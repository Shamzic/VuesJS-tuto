new Vue({
  el: '#vue-app',
  data: {
    name: '',
    job: 'Ninja',
    website: 'http://simonhamery.com',
    websiteTag: '<a href="http://simonhamery.com"> The Net Ninja website </a>',
    age: 20,
    x: 0,
    y: 0,
    a: 0,
    b: 0
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' '+ this.name;
    },
    add: function(n) {
      this.age+=n;
    },
    sub: function(n) {
      this.age-=n;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clickprev: function() {
      alert('YO');
    },
    logName: function() {
      console.log("you entered your name");
    },
    logAge: function() {
      console.log("you entered your age");
    }
    // ,
    // addToA: function() {
    //     return this.a+ this.age
    // },
    // addToB: function() {
    //     return this.b+ this.age
    // }
  },
  computed: {
    addToA: function() {
        return this.a+ this.age
    },
    addToB: function() {
        return this.b+ this.age
    },
  }
});

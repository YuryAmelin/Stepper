const App = {
  data() {
    return {
      activeIndex: 0,
      isActive: true,
      steps: [
        {title: 'Булочка', text: '“Золотой стандарт” фаст-фуда, ведь именно с нее когда-то “начинался” бургер. Иногда она кажется скучной и невыразительной, но эта простота и ненавязчивость – ее главное преимущество.'},
        {title: 'Котлета', text: 'Покупка готового говяжьего фарша — не самая умная идея: вы никогда не будете уверены, из какой части его приготовили, не говоря уже о его свежести. Молоть фарш придется самим.'},
        {title: 'Сыр-р-р', text: 'Сыр для бургера должен быть плавким – хорошо растапливаться. Бургер с твёрдым и холодным кусочком сыра – странный и непривычный бургер. Конечно, можно использовать твёрдый и выдержанный сыр, например, пармезан и грюйер, но над ним нужно немого поколдовать.'},
        {title: 'Помидор и огурчики', text: 'Идеальные овощи для бургера: лук, маринованные огурцы, салат (айсберг, латук или романо), помидоры.'},
        {title: 'Салат и лук', text: 'Айсберг или другой плотный и хрустящий салат; не надо брать нежные сорта салата, он просто размякнет в бургере и испортит его. Лук лучше чтобы был маринованным.'},
        {title: 'Булочка', text: 'Завершает данную композицию булочка с кунжутом.'},
      ],
    }
  },
  methods: {
    prev() {
      if (this.activeIndex !== 0) {
        this.activeIndex--
      }
    },
    reset() {
      this.activeIndex = 0
      this.isActive = true
    },
    nextOfFinish() {
      if (this.activeIndex !== this.steps.length - 1) {
        this.activeIndex++
      } else {
        this.isActive = false
      }
    },
    setActive(idx) {
      this.activeIndex = idx
    }
  },
  computed: {
    lastStep() {
      return this.activeIndex === this.steps.length - 1
    },
    activeStep() {
      return this.steps[this.activeIndex]
    },
    prevDisabled() {
      return this.activeIndex === 0
    },
    activeImage() {
      return ( 'img/'+this.activeIndex+'.png')
    }
  }
}

Vue.createApp(App).mount('#app')
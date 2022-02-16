Component({
  // 组件选项
  options: {
    multipleSlots: true,
  },
  behaviors: [],
  properties: {},
  // 组件数据
  data: {
    active:1
  },
  // 数据监听器
  observers: {},
  // 组件方法
  methods: {
    handleActive(e:any){
      const { type } = e.currentTarget.dataset
      this.setData({
        active:type
      })
    }
  },
})

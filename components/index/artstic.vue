<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd :class="{active:kind==='all'}" :keyword="all" :kind="all">全部</dd>
      <dd :class="{active:kind==='part'}" :keyword="美食" :kind="part">约会聚餐</dd>
      <dd :class="{active:kind==='spa'}" :keyword="丽人" :kind="spa">丽人SPA</dd>
      <dd :class="{active:kind==='movie'}" :keyword="电影" :kind="movie">电影演出</dd>
      <dd :class="{active:kind==='travel'}" :keyword="旅游" :kind="travel">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card :body-style="{padding:'0px'}" shadow="never">
          <img :src="item.img" alt="" class="image">
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li class="pos"><span>{{item.subtitle}}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [{
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }],
        part: [{
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }],
        sap: [{
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }],
        movie: [{
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }],
        travel: [{
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }, {
          title: '恬嬉·法式甜品（人民广场店）',
          subtitle: '美梦成真1个，约6英寸，仿真',
          price: Math.ceil(Math.random() * 400),
          img: '//p1.meituan.net/msmerchant/baee8e8e09c392428917e3f312ecb9b5753122.png',
          url: '//abc.com'
        }]
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  }
  // methods: {
  //   over: function (e) {
  //     dom = e.target
  //     let self = this
  //     this.kind = dom.getAttribute('kind')
  //   },
  //
  // }
}
</script>

<style lang="scss">
  @import "../../assets/css/index/artistic.scss";
</style>

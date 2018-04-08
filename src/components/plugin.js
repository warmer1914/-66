import NavList from './header/header.vue'
import FooterList from  './footer/footer.vue'


export default {
  install(Vue){
    Vue.component(NavList.name,NavList);
    Vue.component(FooterList.name,FooterList);
  }
}

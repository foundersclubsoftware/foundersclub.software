import { shallowMount, Wrapper, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import NavBar from "@/components/NavBar.vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

describe("App.vue", () => {
  class AppWrapper {
    constructor(public wrapper: Wrapper<App>) {}

    get navbar(): Wrapper<App> {
      return this.wrapper.find(NavBar) as Wrapper<App>;
    }
  }
  it("should render NavBar", () => {
    const wrapper = new AppWrapper(
      shallowMount(App, {
        stubs: ["router-link", "router-view"]
      })
    );
    expect(wrapper.navbar.exists()).toBe(true);
  });

  it("test router", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({
      routes: [{ path: "/", name: "home", component: Home }]
    });
    const wrapper = shallowMount(App, {
      stubs: ["router-link", "router-view"],
      localVue,
      router
    });
    expect(wrapper.vm.$route.path).toBe("/");
  });
});

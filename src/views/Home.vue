<template lang="pug">
  div(id="Home")
    .flex.flex-column.tc.white.main-bg.items-center
      .f1.mt6.fw5 Get to Market
      .f3.mt4.mb6.w-40 No matter where you are in the process, we can help you and your app idea.
    .tl
      .center.w-60.mt5
        .flex.flex-column.center.w-90
          p.mt5 Have an app idea? Not sure where to start?
          p.mb5 The Founders Club Software Team is a team of software developers here to get your idea off 
            | the ground. Our team is available exclusively for current members of the University of
            | Iowa Founders Club. All of our services are free of charge although you may be required
            | to pay for maintenance fees such sa hosting, databases, etc.
        h2 Our expertise:
        .flex.flex-column.center.w-90.ma0.mb
          p.ma0.pa0 - Android app development
          p.ma0.pa0 - iOS (iPhone, iPad, Apple Watch/TV) development
          p.ma0.pa0 - Web app development
          p.mt0.mb5.pa0 - Bots, personal assistant, and more. If it's software, we can build it.
        h2(id="Services") Our services:
        h3.tc.w-50.center.mt5 Services we provide to all members, no matter the level:
        .flex.flex-column.center.w-90.ma0
          p - Technical consulting. What business model would work well for my business? What 
            | is the difference between Android, iOS, or web? How do I make money with my product? If
            | you have a question in regards to anything tech, just ask!
          p - Creating mockups and prototypes to prove the concept. Show to investors, pitch 
            | competitions, and early customers to get pre-sales.
          p - Creating a plan to get to market and beyond. Do you feel you have been stuck at 
            | the same point in your business for months or years? Have a prototype made but not sure
            | what to do with it? Have early sales but not sure how to grow? We can help you get to 
            | the next step.
          p.mb4 - Help with your pitch to explain your tech. Overcomplicating your business solution
            | is very easy to do, but is not recommended in a pitch. We can help you explain your 
            | technology to the public like they are 5.
        h3.tc.w-60.center.mt5 Services we provide to Members and Elite Members level of the Founders Club:
        .flex.flex-column.center.w-90.ma0.mb5
          p - MVP software development. We can design and build you your first solution to go to market 
            | with. Have something to sell to your customers in weeks, not months.
          p - Full service custom software development. Once you have a solution worth investing time, 
            | energy and money into, we can design and develop an app for you from scratch that is made
            | to scale.
        h2 Services we do 
          i not 
          | provide:
        .flex.flex-column.center.w-90.ma0.mb
          p - Help manage, teach, or fix issues for developers on your team. If you have decided
            | to bring developers onto your team, hired help, or you’re a developer yourself, this is a 
            | responsibility you will need to take care of yourself. As a team with limited resources and 
            | a team managed by a professional freelance software developer, we are not able to help you 
            | with your own code.
          p - We are not “code monkeys” here to create your every wish. We hope to be much more of 
            | a resource to you then just writing lots of code for you free of charge. We hope we can work 
            | together to create strategies and apps that are low risk and can change the world. We are an 
            | educational team here to make you successful as the number one priority.
          p - We do not build marketing websites. The Founders Club Marketing Agency is much better 
            | at building websites, e-commerse stores then we are. If you’re not sure if your project is a 
            | web application or a marketing style website, contact us and ask!
        .flex.flex-column.center.router.items-center
          router-link(to="../Process").mt5 Learn more about our process
          router-link(to="../Contact").mb6.mt4 Contact us
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
#Home {
}
</style>

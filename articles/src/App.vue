<template>
  <div id="app">
    <nav>
      <router-link :to="'/'">홈</router-link>
      <div></div>
      <router-link :to="'/create'">만들기</router-link>
    </nav>
    <router-view/>
  </div>
</template>


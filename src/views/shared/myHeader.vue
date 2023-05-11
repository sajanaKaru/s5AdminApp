<template>
  <!-- Side Menu Begins-->
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>S5 Cleaners</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item href="/home">
        <ion-label>
          <code>HOME</code>
        </ion-label>
      </ion-item>
      <ion-item href="/booking">
        <ion-label>
          <code>BOOKING</code>
        </ion-label>
      </ion-item>
      <ion-item href="/quote">
        <ion-label>
          <code>QUOTATION</code>
        </ion-label>
      </ion-item>
      <ion-item href="/list">
        <ion-label>
          <code>USERS</code>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-menu>
  <!-- Side Menu End-->

  <!-- Header begin -->
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-page>
  <!-- Header End -->
</template>
  
<script>
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import myHeader from '@/views/shared/myHeader.vue';

export default {
  name: 'myHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};

</script>
  
<style scoped>
/* Add any custom styles here */
</style>
  
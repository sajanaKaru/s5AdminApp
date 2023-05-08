<template>
  <ion-menu content-id="main-content" :type="reveal">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> Tap the button in the toolbar to open the menu. </ion-content>
  

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="playCircle" />
          <ion-label>Listen now</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/radio">
          <ion-icon :icon="radio" />
          <ion-label>Radio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/library">
          <ion-icon :icon="library" />
          <ion-label>Library</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    

  </ion-page>
</template>




<script setup lang="ts">


    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonHeader } from '@ionic/vue';

    import { playCircle, radio, library, search } from 'ionicons/icons';


  import { useRouter } from 'vue-router';
  const router = useRouter();

</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

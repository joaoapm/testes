<template>
  <div>
    <div class="container"></div>
    <div id="here" class="columns">
      <div class="column is-one-quarter">
        <menu-princ />
      </div>

      <div class="column two-thirds content">
        <p>Lorem ipsum....</p>
      </div>
    </div>
  </div> 
</template>

<script>
import MenuPrinc from "./MenuPrinc";

export default {
  name: "home",
  components: {
    MenuPrinc
  }
};
</script>
 

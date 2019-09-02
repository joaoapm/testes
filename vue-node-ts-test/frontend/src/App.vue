 <template>
  <div>
    <div class="container"></div>
    <div id="here" class="columns">
      <div class="column is-one-quarter">
        <menu-princ />
      </div>

      <div class="column two-thirds content">
        <div id="app">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import MenuPrinc from "./views/MenuPrinc";

export default {
  name: "app",
  components: {
    MenuPrinc
  }
};
</script>
 

<template>
    <b-menu>
        <b-menu-list  > 
            <b-menu-item icon="settings" active expanded>
                <template slot="label" slot-scope="props">
                    Vuetest
                    <b-icon  class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </template>
                <b-menu-item icon="account" label="Animais" tag="router-link" to="/animais"></b-menu-item>
                <b-menu-item icon="cellphone-link" label="Atendimentos"></b-menu-item> 
            </b-menu-item>

            
 
        </b-menu-list>
 

        <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
        </b-menu-list>

    </b-menu>
</template>

<script>
 

export default {  
}
</script>
 

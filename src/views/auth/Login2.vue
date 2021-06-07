<template>
Login !
</template>

<script>
const name = 'page-login'
export default {
  name: name,
  data() {
    return {
      loading: false,
      formValid: false,
      formModel: {
        username: 'admin',
        password: 'admin',
      },
      formRule: {
        username: [(v) => !!v || this.$t('rule.required', ['username'])],
        password: [(v) => !!v || this.$t('rule.required', ['password'])],
      },
      socialIcons: [
        {
          text: 'Google',
          icon: 'mdi-google',
        },
        {
          text: 'Facebook',
          icon: 'mdi-facebook',
        },
        {
          text: 'Twitter',
          icon: 'mdi-twitter',
        },
      ],
    }
  },
  computed: {},
  setup() { 
    const handleLogin = () =>  {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
          .dispatch('login', this.formModel)
          .then(() => {
            const redirect = this.$route.query.redirect
            const route = redirect ? { path: redirect } : { path: '/' }
            this.$router.push(route)
            this.loading = false
          })
          .catch(() => {
            window._VMA.$emit('SHOW_SNACKBAR', {
              show: true,
              text: 'Auth Failed',
              color: 'error',
            })
            this.loading = false
          })
      }
    }
   const handleRegister= () => {
      console.log(this)
    }
    const handleSocialLogin =() => {
      console.log(this)
    }
    return {
      handleLogin,
      handleRegister,
      handleSocialLogin
    }
   },
}
</script>

<style lang="sass" scoped>
.page-login
  &__card
  max-width: 600px
  margin: 0 auto
</style>

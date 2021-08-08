<template>
  <div id="tourism">
    <Header title="鄰近景點" subtitle="Tourism">
      <img class="header-image" src="https://i.imgur.com/B76LE0S.jpg" alt="Room example">
    </Header>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Tourism',
  components: {Header, Footer}
}
</script>
<template>
  <div class="categories-mobile">
    <div class="filters">
      <input type="checkbox">
      <div class="filters-menu">
      
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.filters {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: center no-repeat url("/public/images/Filters.svg");
    background-color: #FFF;
    border-radius: 10px;
    border: 1px solid #000;
}

.filters input {
    width: 30px;
    height: 30px;
    opacity: 0;
    z-index: 2;
}

.filters input:checked ~ .filters-menu {
  transform: translate(0, 0);
}

.filters-menu {
  position: absolute;
  top: 83px;
  left: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: #EAE2D3;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  z-index: 1;
}
</style>
<template>
  <header :class="$style.header">
    <img :class="$style.header_logo" src="#" alt="[]staralink" />
    <nav :class="$style.navigation">
      <ul :class="$style.nav_items">
        <li :class="$style.nav_item_1"><a href="">就労継続支援B型とは</a></li>
        <li :class="$style.nav_item_2">
          <a href="">staralinkのB型への取り組み</a>
          <ul :class="$style.item_2_sub">
            <li><a href="">お仕事事例</a></li>
            <li><a href="">サポート体制</a></li>
          </ul>
        </li>
        <li :class="$style.nav_item_3"><a href="">ビジョン・メッセージ</a></li>
        <li :class="$style.nav_item_4"><a href="">お問い合わせ</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style></style>

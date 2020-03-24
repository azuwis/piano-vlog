<script>
import data from './videos.json';

let videos = data;
let hint = false;
const isApp = navigator.userAgent.match(/(Bili)/);

function hideHint() {
  hint = false;
}

function showHint() {
  if (isApp) {
    hint = true;
  }
}

function play(video) {
  video.play = true;
  videos = videos;
}
</script>

<style>
.btn {
  @apply inline-block bg-gray-200 rounded-lg px-3 py-1 font-semibold text-gray-700 mr-1;
}
</style>

<div class:hidden="{!hint}" on:click={hideHint} class="fixed flex w-full items-center justify-between bg-white text-gray-700 border border-gray-400 px-4 py-3 mt-1 rounded-lg shadow-xl">
  <div>
    下载琴谱需点菜单 ⋮ 浏览器打开
  </div>
  <div>⤴</div>
</div>
<div class="bg-gray-100 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {#each videos as video}
    <div class="bg-white rounded overflow-hidden shadow-xl m-1">
      <div class="relative pb-5/8">
        {#if video.play}
          <iframe title="Bilibili" class="absolute h-full w-full" src="//player.bilibili.com/player.html?autoplay=1&aid={video.bilibili.replace('av', '')}">
          </iframe>
        {:else}
          <img on:click={() => play(video)} class="absolute h-full w-full object-cover cursor-pointer" src="//i0.hdslb.com/bfs/archive/{video.cover}.jpg" alt="{video.title_zh}">
        {/if}
      </div>
      <div class="px-4 py-3">
        <div class="font-bold text-xl mb-2">{video.title_zh}</div>
        <p class="text-gray-700 text-lg">{video.title_en}</p>
      </div>
      <div class="px-4 pt-1 pb-4">
        <a href="https://www.bilibili.com/video/{video.bilibili}" class="btn" target="_blank">视频</a>
        {#if video.sheet !== false}
          <a on:click={showHint} href="/pdf/{video.title_en.replace(/ /g, '_')}.pdf" class="btn">琴谱</a>
        {/if}
        {#if video.tutorial}
          <a href="https://www.bilibili.com/video/{video.tutorial}" class="btn" target="_blank">教程</a>
        {/if}
      </div>
    </div>
  {/each}
</div>

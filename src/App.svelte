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
  @apply inline-block bg-gray-200 rounded-lg px-3 py-1 font-medium text-gray-700 mr-1;
}
</style>

<div class:hidden="{!hint}" on:click={hideHint} class="fixed z-10 flex inset-x-0 items-center justify-between bg-gray-700 text-white rounded-full shadow-lg px-4 py-3 m-2">
  <div>
    下载琴谱需点菜单 ⋮ 浏览器打开
  </div>
  <div>⤴</div>
</div>
<div class="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3">
  {#each videos as video}
    <div class="bg-white border-t border-r border-l rounded-lg shadow-md overflow-hidden m-1">
      <div class="relative pb-5/8">
        {#if video.play}
          <iframe title="Bilibili" class="absolute h-full w-full" src="//player.bilibili.com/player.html?autoplay=1&bvid={video.bilibili}">
          </iframe>
        {:else}
          <img on:click={() => play(video)} class="absolute h-full w-full object-cover cursor-pointer" src="//i0.hdslb.com/bfs/archive/{video.cover}.jpg" alt="{video.title_zh}">
        {/if}
      </div>
      <div class="px-4 py-3 tracking-wide">
        <h3 class="font-medium text-xl">{video.title_zh}</h3>
        <p class="text-gray-700 text-lg">{video.title_en}</p>
        <div class="mt-2">
          <a href="https://www.bilibili.com/video/{video.bilibili}" class="btn" target="_blank">视频</a>
          {#if video.sheet !== false}
            <a on:click={showHint} href="/pdf/{video.title_en.replace(/ /g, '_')}.pdf" class="btn">琴谱</a>
          {/if}
          {#if video.tutorial}
            <a href="https://www.bilibili.com/video/{video.tutorial}" class="btn" target="_blank">教程</a>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>

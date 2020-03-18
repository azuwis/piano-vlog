<script>
import slugify from 'slugify';
import videos from './videos.json';
</script>

<div class='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  {#each videos as video}
    <div class='max-w-md rounded overflow-hidden shadow-lg m-1'>
      <img class='w-full' src='//i0.hdslb.com/bfs/archive/{video.cover}.jpg' alt='{video.title_zh}'>
      <div class='px-6 py-3'>
        <div class='font-bold text-xl mb-2'>{video.title_zh}</div>
        <p class='text-gray-700 text-lg'>
          {video.title_en}
        </p>
      </div>
      <div class='px-6 pt-1 pb-4'>
        <a href='https://www.bilibili.com/video/{video.bilibili}' class='btn' target='_blank'>视频</a>
        <a href='/pdf/{slugify(video.title_en, "_")}.pdf' class='btn'>琴谱</a>
        {#if video.tutorial}
          <a href='https://www.bilibili.com/video/{video.tutorial}' class='btn' target='_blank'>教程</a>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
.btn {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-1;
}
</style>

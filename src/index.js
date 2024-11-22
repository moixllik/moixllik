export default {
  async scheduled(request, env, ctx) {
    ctx.waitUntil(triggerDay());
  },
  async fetch(request, env, ctx) {
    return new Response("Worker");
  },
};

async function triggerDay() {}

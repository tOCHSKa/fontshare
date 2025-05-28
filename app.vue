<template>
  <div class="bg-gray-900 text-gray-100 min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

useHead({
  title: 'FontShare – Polices modernes gratuites',
  meta: [
    {
      name: 'description',
      content: 'FontShare est un site de polices gratuites et modernes. Explorez notre collection de polices sans publicité et sans publicité.'
    }
  ],
  script: [
    {
      id: 'Cookiebot',
      src: 'https://consent.cookiebot.com/uc.js',
      async: true,
      'data-cbid': '0b547a09-5eb2-4120-8f07-c6719f56ca11',
      type: 'text/javascript'
    },
    {
      type: 'text/plain',
      'data-cookieconsent': 'statistics',
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
    },
    {
      type: 'text/plain',
      'data-cookieconsent': 'statistics',
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8K600SK026');
      `
    },
    {
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4373658027660331',
      crossorigin: 'anonymous'
    }
  ]
})
</script>
<style>
body {
  font-family: 'Inter', sans-serif;
  transition: background-color 0.3s ease;
  margin: 0;
}
.gradient-text-filled {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.font-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}
</style>

<script setup>
import Carousel3d from "~/components/Carousel3d.vue";

// Имитация данных (в реальном проекте это будет useFetch с бэкенда)
const popularTours = [
  {
    id: 1,
    title: "Мальдивская сказка",
    location: "Мальдивы, Атолл Ари",
    price: 145000,
    duration: "7 ночей",
    rating: 4.9,
    image:
      "https://optim.tildacdn.com/tild6632-3531-4230-a230-363364623331/-/resize/400x700/-/format/webp/image_6.png.webp",
    badge: "Хит продаж",
  },
  {
    id: 2,
    title: "Величие Каппадокии",
    location: "Турция, Гёреме",
    price: 82000,
    duration: "5 ночей",
    rating: 4.8,
    image:
      "https://optim.tildacdn.com/tild3361-6361-4130-b130-643966646635/-/resize/800x1400/-/format/webp/photo-1529426301869-.jpg",
    badge: "Рекомендуем",
  },
  {
    id: 3,
    title: "Тропики Бали",
    location: "Индонезия, Убуд",
    price: 112000,
    duration: "10 ночей",
    rating: 5.0,
    image:
      "https://optim.tildacdn.com/tild3235-6330-4639-a136-386264383138/-/resize/800x1400/-/format/webp/photo-1605581810011-.jpg",
    badge: "-15% Скидка",
  },
];

const myList = [
  {
    title: "ДОМБАЙ, АРХЫЗ",
    description:
      "Домбай — горнолыжный курорт в Карачаево-Черкесии, известен трассами на горе Мусса-Ачитара, подходит для лыжников и сноубордистов разного уровня, а также для альпинизма и парапланеризма. Архыз — всесезонный курорт, предлагает 27 км трасс разной сложности, включая вечернее катание и сноупарк. Летом доступны байк-парк, экотропы и экскурсии к природным достопримечательностям",
    image:
      "https://optim.tildacdn.com/tild6661-6239-4137-b634-336366396634/-/resize/400x700/-/format/webp/photo-1647750685643-.jpg.webp",
  },
  {
    title: "КУБА",
    description:
      "Яркий и жизнерадостный остров в Карибском море - «Остров свободы», где старинные колониальные города гармонично сочетаются с белоснежными пляжами и зажигательной сальсой. Покоряет своим особым шармом: раритетными автомобилями на улицах, улыбчивыми местными жителями и неповторимой атмосферой праздника",
    image:
      "https://optim.tildacdn.com/tild3361-6361-4130-b130-643966646635/-/resize/400x700/-/format/webp/photo-1529426301869-.jpg.webp",
  },
  {
    title: "ТУРЦИЯ",
    description:
      "Богатое историческое наследие, разнообразная природа и протяжённая береговая линия на четырёх морях: Средиземном, Эгейском, Чёрном и Мраморном. Широкий выбор отдыха: пляжный туризм, экскурсионные программы, оздоровительные туры на термальные источники Памуккале",
    image:
      "https://optim.tildacdn.com/tild3235-6330-4639-a136-386264383138/-/resize/400x700/-/format/webp/photo-1605581810011-.jpg.webp",
  },
  {
    title: "АЛТАЙ",
    description:
      "Одно из живописнейших мест России с уникальной природой и ландшафтами. От горнолыжных комплексов (Манжерок, «Телецкий») до озёрных зон с лечебными грязями (Яровое, Ая), эко-курорты с термальными источниками (Белокуриха) и туристические комплексы с инфраструктурой для семейного отдыха (Бирюзовая Катунь)",
    image:
      "https://optim.tildacdn.com/tild3661-3933-4233-b632-323861663039/-/resize/400x700/-/format/webp/noroot.png.webp",
  },
  {
    title: "ГРУЗИЯ",
    description:
      "Гостеприимная Грузия, знаменитая живописной природой, древними памятниками архитектуры, самобытной культурой и гостеприимством. Её территория сочетает горные ландшафты Большого Кавказа, субтропическое побережье Чёрного моря и плодородные долины",
    image:
      "https://optim.tildacdn.com/tild3063-3432-4665-b663-646261623464/-/resize/400x700/-/format/webp/photo-1558352532-d30.jpg.webp",
  },
  {
    title: "ЕГИПЕТ",
    description:
      "Земля фараонов, где древняя история, величественные пирамиды и храмы соседствуют с лазурным Красным морем, с невероятными пляжами, коралловыми рифами и тёплым солнцем. Здесь пески Сахары плавно переходят в ожившую летопись прошлого, а современность гармонично вплетается в тысячелетние традиции",
    image:
      "https://optim.tildacdn.com/tild6631-6434-4535-b765-393862643533/-/resize/400x700/-/format/webp/photo-1553913861-dc2.jpg.webp",
  },
  {
    title: "САНКТ-ПЕТЕРБУРГ",
    description:
      "Величественная Северная столица России, раскинувшаяся на 42 островах дельты Невы, где классическая архитектура XVIII-XIX веков гармонично сочетается с современной городской жизнью. Город славится своими музеями, театрами и памятниками, а его исторический центр, включенный в список ЮНЕСКО, поражает великолепием дворцов, соборов и монументальных ансамблей",
    image:
      "https://optim.tildacdn.com/tild3766-3537-4562-a634-336432376137/-/resize/400x700/-/format/webp/photo-1590784776259-.jpg.webp",
  },
  {
    title: "ШРИ-ЛАНКА",
    description:
      "Живописный остров - жемчужина в Индийском океане с бескрайними пляжами, древними буддийскими храмами и величественными горными пейзажами. Тёплый климат, экзотическая кухня с ароматными специями, знаменитые цейлонские чаи и гостеприимство местных жителей создают неповторимую атмосферу этого райского уголка",
    image:
      "https://optim.tildacdn.com/tild3632-3164-4062-a336-353638303138/-/resize/400x700/-/format/webp/photo-1580910531902-.jpg.webp",
  },
  {
    title: "ВЬЕТНАМ",
    description:
      "Живописная страна в Юго‑Восточной Азии, протянувшаяся вдоль побережья Южно‑Китайского моря, с белоснежными пляжами. Бухта Халонг с тысячами известняковых островков, древние пагоды и колониальная архитектура городов Хойан и Ханой. Здесь можно попробовать аутентичную кухню, исследовать рисовые террасы в горах, посетить жемчужные плантации и насладиться разнообразием отдыха — от расслабленного пляжного до насыщенных экскурсий и дайвинга",
    image:
      "https://optim.tildacdn.com/tild3134-3561-4165-a265-396466393239/-/resize/400x700/-/format/webp/photo-1643030595382-.jpg.webp",
  },
  {
    title: "КРЫМ",
    description:
      "Райский полуостров, где каждый найдёт отдых по душе: от пляжного релакса на черноморском побережье до захватывающих экскурсий по величественным дворцам и древним крепостям. Здесь гармонично сочетаются живописные горные пейзажи, бескрайние степи, густые леса и роскошные парки, а мягкий климат позволяет наслаждаться природой практически круглый год",
    image:
      "https://optim.tildacdn.com/tild3535-3263-4538-b530-316239653139/-/resize/400x700/-/format/webp/photo-1564085740576-.jpg.webp",
  },
  {
    title: "ОАЭ",
    description:
      "Объединённые Арабские Эмираты (ОАЭ) — страна контрастов, где футуристические мегаполисы соседствуют с древними традициями, а бескрайние пустыни — с лазурными пляжами. Каждый эмират предлагает уникальный опыт: от головокружительных небоскрёбов Дубая до уединённых пляжей Фуджейры",
    image:
      "https://optim.tildacdn.com/tild3764-3933-4761-b965-356333653334/-/resize/400x700/-/format/webp/photo-1518684079-3c8.jpg.webp",
  },
  {
    title: "АБХАЗИЯ",
    description:
      "Страна удивительных горных ландшафтов, с протяжённым черноморским побережьем, известная термальными источниками, реликтовыми лесами и гостеприимством. Сочетание пляжного отдыха, водолечебниц и экскурсий к природным и историческим достопримечательностям",
    image:
      "https://optim.tildacdn.com/tild3264-3638-4166-b736-613665656530/-/resize/400x700/-/format/webp/noroot.png.webp",
  },
  {
    title: "КАРЕЛИЯ",
    description:
      "Край тысячи озёр и вековых лесов, где первозданная северная природа сочетается с богатым культурным наследием. Здесь можно увидеть величественные водопады, древние петроглифы, знаменитый мраморный каньон Рускеала и уникальный архитектурный ансамбль Кижи, а также насладиться кристально чистой водой многочисленных озёр и величественными пейзажами Ладожских шхер",
    image:
      "https://optim.tildacdn.com/tild6364-3032-4733-a366-383631616337/-/resize/400x700/-/format/webp/photo-1573156667495-.jpg.webp",
  },
  {
    title: "ТАИЛАНД",
    description:
      "Особую атмосферу стране придаёт знаменитый тайский колорит - гостеприимство местных жителей, изысканная кухня, древние традиции и неповторимый дух «страны улыбок». Тёплый климат и развитая туристическая инфраструктура позволяют сполна наслаждаться отдыхом в Таиланде",
    image:
      "https://optim.tildacdn.com/tild6338-3832-4064-a261-303361333430/-/resize/400x700/-/format/webp/photo-1606750575164-.jpg.webp",
  },
  {
    title: "МАЛЬДИВЫ",
    description:
      "Архипелаг райских островов в Индийском океане. Белоснежные пляжи, бирюзовая вода и коралловые рифы создают картину, достойную обложки глянцевого журнала. Здесь нет суеты мегаполисов — только безмятежность, шелест пальм и бесконечная бирюзовая гладь воды",
    image:
      "https://optim.tildacdn.com/tild6632-3531-4230-a230-363364623331/-/resize/400x700/-/format/webp/image_6.png.webp",
  },
  {
    title: "БАЙКАЛ",
    description:
      "Самое глубокое озеро планеты, хранящее в своих кристально чистых водах 20% мировых запасов пресной воды. Окружённое живописными горными хребтами и таёжными лесами, оно поражает воображение своими масштабами и уникальной экосистемой, где обитают редкие виды животных и растений",
    image:
      "https://optim.tildacdn.com/tild3335-3061-4133-b661-626661643036/-/format/webp/photo-1613743147907-.jpg.webp",
  },
  {
    title: "ИНДИЯ",
    description:
      "ГОА — популярный курортный штат на юго‑западном побережье Индии, известный своими протяжёнными пляжами с пальмами, тёплой морской водой и расслабленной атмосферой. Здесь туристы могут насладиться как спокойным отдыхом на белоснежных пляжах Южного Гоа, так и бурной ночной жизнью и вечеринками в Северном Гоа",
    image:
      "https://optim.tildacdn.com/tild6432-6365-4864-a261-393832323037/-/format/webp/noroot.png.webp",
  },
];
useHead({
  title: "Главная",
});
</script>

<template>
  <div>
    <!-- 1. Главный экран -->
    <Hero />

    <!-- 2. Секция "Популярные направления" -->
    <section class="py-24 bg-white px-6">
      <div class="max-w-7xl mx-auto">
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div class="max-w-xl">
            <!-- <span
              class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block"
            >
              Лучшие предложения недели
            </span> -->
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-[1px] bg-cyan-600/30"></div>
              <span
                class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
              >
                Лучшие предложения недели
              </span>
              <div class="w-8 h-[1px] bg-cyan-600/30"></div>
            </div>

            <h2
              class="text-3xl md:text-5xl font-black text-gray-900 leading-tight"
            >
              Популярные туры, которые <br />
              <span class="text-cyan-600">ВЫБИРАЮТ КЛИЕНТЫ</span>
            </h2>
          </div>
          <NuxtLink
            to="/tours"
            class="flex items-center gap-2 text-cyan-600 font-bold hover:gap-4 transition-all"
          >
            Смотреть все туры
            <Icon name="i-lucide:arrow-right" />
          </NuxtLink>
        </div>

        <!-- Сетка карточек -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TourCard v-for="tour in popularTours" :key="tour.id" :tour="tour" />
        </div>
      </div>
    </section>

    <!-- 3. Секция "Преимущества" (Текстовый блок) -->
    <section class="py-24 bg-gray-50 px-6 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <!-- Заголовок секции -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="flex items-center justify-center gap-3 mb-3">
            <div class="w-8 h-[1px] bg-cyan-600/30"></div>
            <span
              class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
            >
              Почему выбирают нас
            </span>
            <div class="w-8 h-[1px] bg-cyan-600/30"></div>
          </div>
          <h2
            class="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
          >
            Преимущества <span class="text-cyan-600 uppercase">Дрим-Тур</span>
          </h2>
          <p
            class="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Доступность и комфорт для каждого путешественника.
            <br class="hidden md:block" />
            Удалённое сопровождение и удобная онлайн-оплата.
          </p>
        </div>

        <!-- Сетка преимуществ -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Доступность -->
          <div
            class="group flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors"
            >
              <Icon name="i-lucide:banknote" size="28" />
            </div>
            <h4 class="text-xl font-bold mb-3">Доступность</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              Мы предлагаем выгодные цены на туры, включая горячие предложения
              для любого бюджета.
            </p>
          </div>

          <!-- Комфорт -->
          <div
            class="group flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors"
            >
              <Icon name="i-lucide:coffee" size="28" />
            </div>
            <h4 class="text-xl font-bold mb-3">Комфорт</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              Заботимся о вашем удобстве на каждом этапе: от подбора отеля до
              организации трансфера.
            </p>
          </div>

          <!-- Удалённое сопровождение -->
          <div
            class="group flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors"
            >
              <Icon name="i-lucide:headset" size="28" />
            </div>
            <h4 class="text-xl font-bold mb-3">Сопровождение</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              Наши специалисты на связи 24/7 и готовы помочь вам удалённо в
              любой точке мира.
            </p>
          </div>

          <!-- Онлайн-оплата -->
          <div
            class="group flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors"
            >
              <Icon name="i-lucide:credit-card" size="28" />
            </div>
            <h4 class="text-xl font-bold mb-3">Онлайн-оплата</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              Удобные и безопасные способы онлайн-оплаты делают процесс
              бронирования мгновенным.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Секция "Направления и страны" -->
    <section class="py-24 bg-white px-6">
      <div class="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
          <span
            class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
          >
            Весь мир перед вами
          </span>
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
        </div>
        <h2
          class="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
        >
          Направления и <span class="text-cyan-600 uppercase">СТРАНЫ</span>
        </h2>
        <p
          class="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Куда бы вы хотели отправиться?
        </p>
      </div>
      <Carousel3d
        :items="myList"
        width="400px"
        height="600px"
        :visible="5"
        :interval="5000"
      >
        <!-- Переопределяем отображение через слот -->
        <template #default="{ item, index, currentIndex }">
          <div class="relative h-full w-full flex flex-col justify-end">
            <div class="absolute inset-0 z-0">
              <img
                :src="item.image"
                alt="Background"
                class="w-full h-full object-cover scale-105"
                :class="{ 'animate-slow-zoom': currentIndex === index }"
                draggable="false"
              />
            </div>
            <div class="bg-black/50 backdrop-blur-sm text-white p-4">
              <h3 class="font-black mb-3 uppercase">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </template>
      </Carousel3d>
    </section>

    <!-- 5. Секция "5 шагов" -->
    <section class="py-24 bg-white px-6 relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-20">
          <div class="flex items-center justify-center gap-3 mb-3">
            <div class="w-8 h-[1px] bg-cyan-600/30"></div>
            <span
              class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
            >
              Простой процесс
            </span>
            <div class="w-8 h-[1px] bg-cyan-600/30"></div>
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-gray-900">
            5 шагов к <span class="text-cyan-600">ВАШЕЙ МЕЧТЕ</span>
          </h2>
        </div>

        <!-- Контейнер шагов -->
        <div class="relative">
          <!-- Декоративная линия (только для десктопа) -->
          <div
            class="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10"
          >
            <!-- Шаг 1 -->
            <div class="flex flex-col items-center text-center group">
              <div
                class="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:border-cyan-500 transition-all duration-500 relative"
              >
                <span
                  class="absolute -top-2 -right-2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >1</span
                >
                <Icon
                  name="i-lucide:map"
                  size="40"
                  class="text-gray-400 group-hover:text-cyan-600 transition-colors"
                />
              </div>
              <h4 class="text-lg font-bold mb-3">Выбор направления</h4>
              <p class="text-gray-500 text-sm leading-relaxed px-4">
                Определитесь с местом, которое хотите посетить.
              </p>
            </div>

            <!-- Шаг 2 -->
            <div class="flex flex-col items-center text-center group">
              <div
                class="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:border-cyan-500 transition-all duration-500 relative"
              >
                <span
                  class="absolute -top-2 -right-2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >2</span
                >
                <Icon
                  name="i-lucide:file-edit"
                  size="40"
                  class="text-gray-400 group-hover:text-cyan-600 transition-colors"
                />
              </div>
              <h4 class="text-lg font-bold mb-3">Заявка на подбор</h4>
              <p class="text-gray-500 text-sm leading-relaxed px-4">
                Заполните форму заявки прямо на нашем сайте.
              </p>
            </div>

            <!-- Шаг 3 -->
            <div class="flex flex-col items-center text-center group">
              <div
                class="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:border-cyan-500 transition-all duration-500 relative"
              >
                <span
                  class="absolute -top-2 -right-2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >3</span
                >
                <Icon
                  name="i-lucide:search-check"
                  size="40"
                  class="text-gray-400 group-hover:text-cyan-600 transition-colors"
                />
              </div>
              <h4 class="text-lg font-bold mb-3">Подбор тура</h4>
              <p class="text-gray-500 text-sm leading-relaxed px-4">
                Наши специалисты подберут для вас оптимальный вариант.
              </p>
            </div>

            <!-- Шаг 4 -->
            <div class="flex flex-col items-center text-center group">
              <div
                class="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:border-cyan-500 transition-all duration-500 relative"
              >
                <span
                  class="absolute -top-2 -right-2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >4</span
                >
                <Icon
                  name="i-lucide:badge-check"
                  size="40"
                  class="text-gray-400 group-hover:text-cyan-600 transition-colors"
                />
              </div>
              <h4 class="text-lg font-bold mb-3">Документы / Оплата</h4>
              <p class="text-gray-500 text-sm leading-relaxed px-4">
                Согласование условий и удобного способа оплаты.
              </p>
            </div>

            <!-- Шаг 5 -->
            <div class="flex flex-col items-center text-center group">
              <div
                class="w-24 h-24 bg-cyan-600 border-4 border-cyan-100 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-cyan-200 group-hover:scale-110 transition-all duration-500 relative"
              >
                <span
                  class="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >5</span
                >
                <Icon name="i-lucide:palmtree" size="40" class="text-white" />
              </div>
              <h4 class="text-lg font-bold mb-3">Ваша Мечта</h4>
              <p class="text-gray-500 text-sm leading-relaxed px-4">
                Наслаждайтесь отдыхом и новыми впечатлениями!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Секция бронирования (CTA) -->
    <section class="py-24 bg-white px-6 relative overflow-hidden">
      <!-- Декор фона -->
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50"
      ></div>

      <div class="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
          <span
            class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
          >
            Индивидуальный подход
          </span>
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
        </div>
        <h2
          class="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
        >
          Не нашли <span class="text-cyan-600 uppercase">ПОДХОДЯЩИЙ ТУР?</span>
        </h2>
        <p
          class="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Оставьте свои контакты, и мы соберем для вас индивидуальное
          предложение, исходя из ваших предпочтений и бюджета.
        </p>
      </div>

      <BookingForm />
    </section>
  </div>
</template>

<style scoped>
.custom-card {
  display: flex;
  flex-direction: column;
  /* Центрируем содержимое (кнопку и текст) внизу или по центру */
  justify-content: flex-end;
  height: 100%;

  /* Настройки фона */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Опционально: скругление углов, если нужно */
  border-radius: 8px;
  overflow: hidden;
}

.info {
  padding: 15px;
  text-align: center;
  /* Полупрозрачный фон, чтобы текст читался поверх картинки */
  background: rgba(0, 0, 0, 0.1);
  color: white;
}

@keyframes slow-zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}

.animate-slow-zoom {
  animation: slow-zoom 15s infinite alternate ease-in-out;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

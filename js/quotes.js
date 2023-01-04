const quotes = [
  {
    quote: "자신감을 잃지 마라",
    author: "브렌다 올랜드",
  },
  {
    quote: "더 낫게 실패하라",
    author: "메리 고든",
  },
  {
    quote: "자신을 통제하라",
    author: "메리 카",
  },
  {
    quote: "엉덩이로 글을 써라",
    author: "샤를 보들레드",
  },
  {
    quote: "생각을 현실로 만들어라",
    author: "윌리엄 스태퍼드",
  },
  {
    quote: "색안경을 쓰고 봐라",
    author: "손턴 와일더",
  },
  {
    quote: "미루는 습관을 버려라",
    author: "테드 쿠저",
  },
  {
    quote: "일단 항복하라",
    author: "파멜라 스파이로 와그너",
  },
  {
    quote: "고요하게 침묵하라",
    author: "조너선 프랜슨",
  },
  {
    quote: "자기최면을 걸어라",
    author: "앤 라모트",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;

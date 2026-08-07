      let div = document.querySelector("div");
      let button = document.querySelector("button");
      let h2 = document.querySelector("h2");

       const quotes = [
        "PowerFul People Makes Places PowerFul!",
        "I Have To Become More!",
        "Did You Forget, Who I am!",
        "Say My Name!",
        "First Rule Of Fight Club!, is...",
        "Consequences!",
        "Men Are Brave!",
        "Never Settle!",
        "The only way to do great work is to love what you do.",
        "Life is what happens when you're busy making other plans." ,
        "The future belongs to those who believe in the beauty of their dreams." ,
        "It does not matter how slowly you go as long as you do not stop.",
        "In the end, it's not the years in your life that count. It's the life in your years.",
        "The purpose of our lives is to be happy.",
        "Get busy living or get busy dying.",
        "You only live once, but if you do it right, once is enough.",
        "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "If you want to live a happy life, tie it to a goal, not to people or things." 
      ]

      button.addEventListener("click", but);
      const inx = new Set()

      function but() {

        if(inx.size >= quotes.length){
            inx.clear();
        }

        while(true){
        const index = Math.floor(Math.random() * quotes.length);

        if(inx.has(index)) continue

        const qq = quotes[index];
        h2.innerText = qq;
        inx.add(index);
        break;
        }
      }

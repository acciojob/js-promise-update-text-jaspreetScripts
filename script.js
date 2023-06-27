//your JS code here. If required.
  function delayHello() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('Hello, world!');
          }, 1000);
        });
      }

      const outputElement = document.getElementById('output');

      delayHello().then((message) => {
        outputElement.textContent = message;
      });
// Select element
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

function refresh() {
  newQuote((data) => {
    // console.log(data.slip.advice);

    const main = document.querySelector('.main');

    if (main.children.length === 1) {
      main.children[0].remove();
    }
    // main.removeChild();
    const card = document
      .createRange()
      .createContextualFragment(
        /*html*/
        `
        <div class="card">
        <h1 class="tittle-1">ADVICE #${data.slip.id}</h1>

        <div class="container">
          <p class="quote">
            “${data.slip.advice}”
          </p>
          <div class="divisor">
            <svg
              class="hidden-lg"
              width="295"
              height="16"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#4F5D74"
                  d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g
                  transform="translate(138)"
                  fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect
                    x="14"
                    width="6"
                    height="16"
                    rx="3" />
                </g>
              </g>
            </svg>

            <svg
              class="hidden-sm"
              width="295"
              height="16"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#4F5D74"
                  d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g
                  transform="translate(138)"
                  fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect
                    x="14"
                    width="6"
                    height="16"
                    rx="3" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <button class="btn">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733" />
          </svg>
        </button>
      </div>
      `
      );

    main.append(card);
    let btn = selectElement('.btn');
    btn.addEventListener('click', refresh);
  });
}

// Random quote

function newQuote(update) {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => update(data));
}

// Firts Load Quote

document.addEventListener('DOMContentLoaded', refresh);

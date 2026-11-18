/* Мобильное меню. Единственный скрипт на сайте: без сбора данных и внешних запросов. */
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  if (!burger || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  }

  burger.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });

  // Закрыть после перехода по пункту меню
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Закрыть по Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      burger.focus();
    }
  });

  // Закрыть при переходе на десктопную ширину
  window.matchMedia('(min-width: 980px)').addEventListener('change', function (mq) {
    if (mq.matches) setOpen(false);
  });
})();

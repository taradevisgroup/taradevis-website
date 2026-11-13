(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
    if (event.key === 'Tab' && menuButton.getAttribute('aria-expanded') === 'true') {
      const last = navigation.querySelector('a:last-child');
      if (event.shiftKey && document.activeElement === menuButton) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); menuButton.focus();
      }
    }
  });
  window.matchMedia('(max-width: 900px)').addEventListener('change', () => setMenu(false));

  const form = document.querySelector('#enquiry-form');
  form.querySelector('[type=submit]').disabled = false;
  const name = form.elements.name;
  const phone = form.elements.phone;
  const project = form.elements.project;
  const message = form.elements.message;
  const result = document.querySelector('#form-result');
  let intent = 'Enquire about a residence';
  document.querySelectorAll('[data-project]').forEach((link) => {
    link.addEventListener('click', () => {
      project.value = link.dataset.project;
      intent = link.dataset.intent || 'Enquire about a residence';
      result.hidden = true;
    });
  });

  const validateName = () => name.setCustomValidity(name.value.trim() ? '' : 'Please enter your name.');
  const validatePhone = () => {
    const digits = phone.value.replace(/\D/g, '');
    const validCharacters = /^\+?[\d\s().-]+$/.test(phone.value.trim());
    phone.setCustomValidity(validCharacters && digits.length >= 10 && digits.length <= 15 ? '' : 'Please enter a valid phone number with 10–15 digits.');
  };
  name.addEventListener('input', validateName);
  phone.addEventListener('input', validatePhone);
  form.addEventListener('input', () => { result.hidden = true; });
  project.addEventListener('change', () => {
    intent = 'Enquire about a residence';
    result.hidden = true;
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName();
    validatePhone();
    if (!form.reportValidity()) return;
    const lines = [
      'Hello Tara Devi’s Group,',
      `I would like to ${intent.charAt(0).toLowerCase() + intent.slice(1)}.`,
      `Interested in: ${project.value}`,
      `Name: ${name.value.trim()}`,
      `Phone: ${phone.value.trim()}`,
      form.elements.city.value.trim() ? `City: ${form.elements.city.value.trim()}` : '',
      message.value.trim() ? `Message: ${message.value.trim()}` : ''
    ].filter(Boolean);
    const url = `https://wa.me/919871177761?text=${encodeURIComponent(lines.join('\n'))}`;
    document.querySelector('#whatsapp-fallback').href = url;
    result.hidden = false;
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  const privacy = document.querySelector('#privacy');
  let privacyTrigger;
  document.querySelectorAll('[data-open-privacy]').forEach((trigger) => trigger.addEventListener('click', (event) => {
    event.preventDefault();
    privacyTrigger = trigger;
    privacy.showModal();
  }));
  privacy.querySelectorAll('.dialog-close, .dialog-close-button').forEach((button) => button.addEventListener('click', () => privacy.close()));
  privacy.addEventListener('click', (event) => {
    if (event.target === privacy) {
      const bounds = privacy.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) privacy.close();
    }
  });
  privacy.addEventListener('close', () => privacyTrigger?.focus());
  document.querySelector('#year').textContent = String(new Date().getFullYear());

  if ('IntersectionObserver' in window) {
    const links = [...navigation.querySelectorAll('a:not(.button)')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
  }
})();

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

  const hubspotFormId = '246d4822-f5ae-4e5f-86f1-abfcca5d1de2';
  const interestField = '0-1/im_interested_in';
  const interestValues = {
    'Tara Devi Enclave': 'Tara Devis Enclave',
    'Downtown Kufri': 'Downtown Kufri',
    'General enquiry': 'General enquiry'
  };
  let hubspotForm = null;
  let selectedEnquiry = null;

  const applyProjectSelection = () => {
    if (!hubspotForm || !selectedEnquiry) return;
    try {
      const value = interestValues[selectedEnquiry.project];
      if (value !== undefined) hubspotForm.setFieldValue(interestField, value);
      hubspotForm.setExtraSubmissionMetadata({
        website_project: selectedEnquiry.project,
        website_enquiry_intent: selectedEnquiry.intent
      });
    } catch (error) {
      console.warn('HubSpot project preselection could not be applied.', error);
    }
  };

  window.addEventListener('hs-form-event:on-ready', (event) => {
    if (event.detail?.formId !== hubspotFormId) return;
    hubspotForm = window.HubSpotFormsV4?.getFormFromEvent(event);
    if (!hubspotForm) return;
    document.querySelector('#enquiry-form').dataset.hubspotReady = 'true';
    applyProjectSelection();
  });

  document.querySelectorAll('[data-project]').forEach((link) => {
    link.addEventListener('click', () => {
      selectedEnquiry = {
        project: link.dataset.project,
        intent: link.dataset.intent || 'Enquire about a residence'
      };
      applyProjectSelection();
    });
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


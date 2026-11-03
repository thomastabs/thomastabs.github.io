/* Contact form delivery via Web3Forms (https://web3forms.com): free, no backend.
   Get an access key by entering your email on web3forms.com; it is safe to publish
   (it can only send to the inbox it was created for). See README → Contact form.
   While the key starts with "TODO", the form opens the visitor's mail app instead. */
export const contactForm = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: 'c9c1382c-a904-4b1c-8b9b-dd3f068148e7',
};
export const contactFormReady = !contactForm.accessKey.startsWith('TODO');

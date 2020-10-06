/**
 * dynamically loads css
 * callback - function to change state when it's loaded
 * id - string
 * src - string with source URL
 */
const LoadDynamicLink = (callback, id, src) => {
  const existingLink = document.getElementById(id);

  if (!existingLink) {
    const link = document.createElement('link');
    link.id = id;
    link.href = src;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.body.appendChild(link);

    link.onload = () => {
      if (callback) callback();
    };
  }

  if (existingLink && callback) callback();
};

export default LoadDynamicLink;

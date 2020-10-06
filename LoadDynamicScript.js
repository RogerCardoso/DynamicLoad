/**
 * dynamically loads js script
 * callback - function to change state when it's loaded
 * id - string
 * src - string with source URL
 */
const LoadDynamicScript = (callback, id, src) => {
  const existingScript = document.getElementById(id);

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export default LoadDynamicScript;

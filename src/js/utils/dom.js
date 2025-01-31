export const getCurrentLanguage = () => {
  return document.documentElement.lang || 'en';
};

export const showToast = (message) => {
  if (window.innerWidth > 768) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  } else {
    console.log(message);
  }
}; 
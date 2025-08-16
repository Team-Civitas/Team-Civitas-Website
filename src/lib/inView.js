export function inView(node, { threshold = 0.2 } = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}

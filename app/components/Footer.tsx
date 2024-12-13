export const Footer = () => {
  const links = [
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/alexander-dunlop",
    },
    { name: "GITHUB", url: "https://github.com/alexanderdunlop" },
  ];

  return (
    <footer className="absolute left-0 bottom-0 w-fit">
      <div className="flex font-geist-sans justify-center origin-left -rotate-90 translate-x-5.5 translate-y-2 space-x-4 tracking-tight ">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 text-xs hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

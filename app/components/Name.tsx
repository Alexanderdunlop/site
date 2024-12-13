import Link from "next/link";

export const Name = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="font-geist-sans text-neutral-600 font-light text-4xl">
          Alex Dunlop
        </h1>
      </Link>
      <p className="text-sm text-neutral-600">
        Software engineer & AI optimist.
      </p>
    </div>
  );
};

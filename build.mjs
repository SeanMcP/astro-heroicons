import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";

const foldersToRead = ["20/solid", "24/solid", "24/outline"];

foldersToRead.forEach((folder) => {
  const files = readdirSync(`./node_modules/heroicons/${folder}`);
  if (existsSync(`./${folder}`)) {
    rmSync(`./${folder}`, { recursive: true });
  }
  mkdirSync(`./${folder}`, { recursive: true });
  files.forEach((file) => {
    const content = readFileSync(
      `./node_modules/heroicons/${folder}/${file}`,
      "utf8"
    );
    const next = content.replace(
      `aria-hidden="true"`,
      `aria-hidden="true" {...Astro.props}`
    );

    const [name] = file.split(".");
    // regex to convert kebab-case to camelCase
    let Name = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    Name = Name.charAt(0).toUpperCase() + Name.slice(1);

    writeFileSync(`./${folder}/${Name}.astro`, next);
  });
});

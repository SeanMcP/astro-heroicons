import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";
import pascalcase from "pascalcase";

const directoryMap = {
  "20/solid": "mini",
  "24/outline": "outline",
  "24/solid": "solid",
};

Object.keys(directoryMap).forEach((dir) => {
  const files = readdirSync(`./node_modules/heroicons/${dir}`);
  const outDir = `./${directoryMap[dir]}`;

  if (existsSync(outDir)) {
    rmSync(outDir, { recursive: true });
  }
  mkdirSync(outDir, { recursive: true });

  files.forEach((file) => {
    const content = readFileSync(
      `./node_modules/heroicons/${dir}/${file}`,
      "utf8"
    );
    const next = content.replace(`<svg `, `<svg {...Astro.props} `);

    const [name] = file.split(".");

    writeFileSync(`${outDir}/${pascalcase(name)}.astro`, next);
  });
});

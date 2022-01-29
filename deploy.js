const fs = require("fs");
const path = require("path");
const SWITCH_DIRECTORY = "./switches";

const dataset = [];

const recursiveFileRead = (rootDirectory) => {
    const contents = fs.readdirSync(rootDirectory, { withFileTypes: true });
    contents
        .filter((item) => item.isDirectory())
        .map((item) => [rootDirectory, item.name].join("/"))
        .forEach((item) => recursiveFileRead(item));
    dataset.push(
        ...contents
            .filter(
                (item) => item.isFile() && path.extname(item.name) === ".json"
            )
            .map((item) => [rootDirectory, item.name].join("/"))
            .map((filePath) => {
                const fileData = fs.readFileSync(filePath, "utf8");
                try {
                    return JSON.parse(fileData);
                } catch (e) {
                    console.error(`Failed to add switch data in ${filePath}`, e);
                    return undefined;
                }
            })
            .filter(Boolean)
    );
};

recursiveFileRead(SWITCH_DIRECTORY);

fs.writeFileSync('dist/switches.json', JSON.stringify(dataset));

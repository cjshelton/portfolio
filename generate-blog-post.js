const readline = require("readline");
const fs = require("fs");

const generateBlogPost = async () => {
    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const getDate = new Promise((resolve, reject) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const formattedDate = `${year}-${month}-${date}`;

        input.question(`*** Date (${formattedDate}): `, dateInput => {
            // Default to today's date if no input supplied.
            if (dateInput === "") {
                resolve(formattedDate);
                return;
            }

            // Check the input matches the format YYYY-MM-DD.
            const matches = dateInput.match(/^\w{4}-\w{2}-\w{2}$/);
            if (matches === null) {
                reject(
                    new Error(
                        `Input date [${dateInput}] not in the correct format. Expects the format [${formattedDate}].`
                    )
                );
                return;
            }

            // Otherwise use the provided input.
            resolve(dateInput);
        });
    });

    const date = await getDate;
    console.log("Date chosen: ", date);

    const getTitle = new Promise((resolve, reject) => {
        input.question(`*** Title (case sensitive): `, titleInput => {
            // Default to today's date if no input supplied.
            if (titleInput.length === 0) {
                reject(new Error("Title must be supplied"));
                return;
            }

            const snakeCaseTitle = titleInput
                .split(" ")
                .map(word => word.toLowerCase())
                .join("-");

            // Otherwise use the provided input.
            resolve({
                title: titleInput,
                snakeCase: snakeCaseTitle,
            });
        });
    });
    const { title, snakeCase } = await getTitle;
    console.log("Title chosen: ", title);
    console.log("Snake case: ", snakeCase);

    const newFolder = `${process.cwd()}/src/blog-posts/${date}-${snakeCase}`;

    const createFolder = () => {
        fs.mkdirSync(newFolder);
    };
    createFolder();

    const createIndexFile = () => {
        fs.writeFileSync(
            `${newFolder}/index.md`,
            `---\r\ntitle: "${title}"\r\ndescription: ""\r\n---\r\n\r\n# Introduction\r\n`
        );
    };
    createIndexFile();

    input.close();
};

generateBlogPost();

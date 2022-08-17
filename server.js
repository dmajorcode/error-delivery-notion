import express from "express";
import { Client } from "@notionhq/client";
import path from "path";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import { fileURLToPath } from "url";

export const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
export const databaseId = process.env.NOTION_DATABASE_ID;

const jsonParser = bodyParser.json();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8000;

// POST request
// POST Subject, Error Type, Description
// Functionality : make a database entry in a Notion page with databaseID above

const handlePost = async (req, res) => {
  //req.body
  /**
   * {
   * type1: "Buying and Selling NFTs,"
   * type2: "Buying",
   * subject : "I cannot buy Galactic Punk",
   * description: "This happend when I tried to buy an NFT listed"
   * }
   */
  const type1 = req.body.type1;
  const type2 = req.body.type2;
  const subject = req.body.subject;
  const description = req.body.description;
  try {
    const response = notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Type1: {
          rich_text: [
            {
              text: {
                content: type1,
              },
            },
          ],
        },
        Type2: {
          rich_text: [
            {
              text: {
                content: type2,
              },
            },
          ],
        },
        Subject: {
          title: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Description: {
          rich_text: [
            {
              text: {
                content: description,
              },
            },
          ],
        },
      },
    });
    console.log(await response);
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

app.post("/submit", jsonParser, handlePost);

const handleListening = () =>
  console.log(`Server is listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

// 아래 사용하던 것이나 일시적으로 주석처리
/**
 * 
 * 
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const databaseId = "608cdedab2e74702bfc27cf814c8cd71";
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response);
})();
 app.use(express.static(path.join(__dirname, "error2notion/build")));
 
 app.get("/", function (req, res) {
   // const path = require("path");
   res.sendFile(path.join(__dirname, "error2notion/build/index.html"));
 });
 
 // app.get("/detail", function (req, res) {
 //   res.sendFile(path.join(__dirname, "error2notion/build/routes/detail.html"));
 // });
 
 app.get("/list", function (req, res) {
   // res.json({ name: "error" });
   res.sendFile(path.join(__dirname, "list.html"));
 });
 
 app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "react-project/build/index.html"));
 });
 
 export const databaseId = process.env.NOTION_DATABASE_ID;
 
 export const addItem = async (text) => {
   try {
     const response = await notion.pages.create({
       parent: { database_id: databaseId },
       properties: {
         title: {
           title: [
             {
               text: {
                 content: text,
               },
             },
           ],
         },
       },
     });
     console.log(response);
     console.log("Success! Entry added.");
   } catch (error) {
     console.log(error.body);
   }
 };
 
 // addItem("No more errors!");
 // addItem("Image not loaded");
 * 
 */

export default app;

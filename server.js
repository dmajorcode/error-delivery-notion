import express from "express";
import { Client } from "@notionhq/client";

import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";

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
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

app.post("/submit", jsonParser, handlePost);

const handleListening = () => console.log(`Server is listening`);

app.listen(PORT, handleListening);

export default app;

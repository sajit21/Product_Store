import arcjet, {tokenBucket, shield, detectBot } from "@arcjet/node";

import dotenv from "dotenv";

dotenv.config();

//rate limiting middleware for limit on requests per second
export const aj= arcjet(
    //This aj will be used as a middleware in your Express server later to protect your routes.
    {
        key: process.env.ARCJET_KEY,
        characteristics: ["ip.src"], //allow user or identify user through ip address
        rules: [
            shield({mode : "LIVE"}, 
                detectBot({
                    mode: "LIVE",//block bots 
                    allow: [
                        "CATEGORY:SEARCH_ENGINE", //allow good bots and block unknow bots
                      ],
                }),
                tokenBucket({ //it controls how many request a user can make to our server
                    mode:"LIVE",
                    refillRate: 30, //30 tokens every interval 
                    interval:5,
                    capacity:20,   //max 20 tokens a user can have at once
                })
            )
        ]
    })
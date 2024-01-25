// src/queries.js

import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
    query Publication {
        publication(host: "akshatv.hashnode.dev") {
            isTeam
            title
            posts(first: 10) {
                edges {
                    node {
                        title
                        brief
                        url
                    }
                }
            }
        }
    }
`;

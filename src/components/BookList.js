import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./BookCard";
// sous forme de components fournis par semantic-ui, pour l'affichage en grid
import { Grid, Segment, Header } from "semantic-ui-react";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then(res => {
      const books = res.data;
      setBooks(books);
    });
  }, []);
  return (
    <>
     <Header as='h2'>Livres en vente</Header>
      {books.length === 0 ? (
        <div>loading...</div>
      ) : (
        // <pre>
        //   <code>{JSON.stringify(books, null, 4)}</code>
        // </pre>

        // puisque on va utiliser l'affichage en grid, on remplace les lignes suivantes
              //   <div>
              //   {books.map(b => (
              //     <Book data={b} key={b.id} />
              //   ))}
              // </div>

              // grid basée sur https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/ResponsiveLayout.js
              <Grid columns={4} doubling stackable className="ui for column grid">
              {books.map(b => (
                <Grid.Column key={b.id}>
                  {/* <Segment></Segment> */}
                    <Book data={b} />
                </Grid.Column>
              ))}
            </Grid>
      )}
    </>
  );
}
